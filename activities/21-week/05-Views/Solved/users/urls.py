from django.conf.urls import url

from . import views

urlpatterns = [
   
    url(r'^detail/$', views.detail, name='detail'),
    url(r'^add/$', views.add, name='add'),
    url(r'^$', views.index, name='index'),
]
