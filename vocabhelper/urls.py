from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.HomePage.as_view(), name='index'),
    url(r'^about/$', views.AboutPage.as_view(), name='about'),
    url(r'^contact/$', views.Contact.as_view(), name='contact'),
    url(r'^tos/$', views.TermsOfServicePage.as_view(), name='tos'),
    url(r'^privacy/$', views.PrivacyPage.as_view(), name='privacy'),
]
