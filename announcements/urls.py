from django.urls import path
from . import views

urlpatterns = [
    # path('', views.announcement, name='home'), 
    path('announcement', views.announcement, name='announcement'), 
]