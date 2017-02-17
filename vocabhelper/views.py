from django.shortcuts import render
from django.views.generic import TemplateView
from django.utils.html import escape
from django.http import HttpResponse
import requests, threading
from Queue import Queue

class TermsOfServicePage(TemplateView):
    template_name = 'tos.html'

class PrivacyPage(TemplateView):
    template_name = 'privacy.html'

class HomePage(TemplateView):

    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

    def post(self, request):
        import difflib
        data = escape(request.POST['words']).strip(' ').replace('&quot;', '').splitlines()
        word_dict = WordDict(data)
        results = word_dict.define()
        if not results:
            return HttpResponse('We\'ve encountered an error! Please try again later.')
        output = []
        for result in results:
            try:
                defs = results[result]['results']
                if len(defs) == 0:
                    output.append(result + ': \n')
                    pass
                headwords = map(lambda x: x['headword'].lower(), defs)
                matches = difflib.get_close_matches(result.lower(), headwords, cutoff=0.4)
                reversed_name = ', '.join(result.lower().split(' ')[::-1])
                match_reversed_name = difflib.get_close_matches(reversed_name, headwords, cutoff=0.4)
                if len(match_reversed_name) > 0 and match_reversed_name[0] == reversed_name:
                    matches = match_reversed_name
                for r in defs:
                    if result + ': ' in output: break
                    if r['headword'].lower() == matches[0]:
                        senses = r['senses'][0]
                        for k in senses:
                            if k == 'definition':
                                if result + ': ' not in output:
                                    output.append(result + ': ' + senses[k][0] + '\n')
            except: output.append(result + ': \n\n')
        sorted_output = []
        try:
            for key in data:
                sorted_output.append(filter(lambda x: x.split(':')[0] == key, output)[0])
        except: return HttpResponse('\n'.join(output).replace('\n\n\n', '\n\n'))

        return HttpResponse('\n'.join(sorted_output).replace('\n\n\n', '\n\n'))

class WordDict(object):

    def __init__(self, word_list):
        self.words = filter(lambda x: len(x) > 0, word_list)
        self.results = {}

    def _define(self, word):
        api = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword='
        data = requests.get(api + word).json()
        self.results[word] = data

    def _threader(self):
        while True:
            word = self.q.get()
            self._define(word)
            self.q.task_done()

    def define(self):
        try:
            self.q = Queue()
            for i in range(10):
                t = threading.Thread(target=self._threader)
                t.daemon = True
                t.start()
            map(lambda word: self.q.put(word), self.words)
            self.q.join()
            return self.results
        except: return None
