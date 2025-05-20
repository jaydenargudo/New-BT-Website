from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('staff/', views.staff_page, name='staff'),
    path('about/', views.about, name='about'),
    path('aerospace/', views.aerospace, name = 'aerospace'),
    path('automotive/', views.automotive, name = 'automotive'),
    path('comm_art/', views.commercial_art, name = 'commercial_art'),
    path('SAM/', views.business, name = 'business'),
    path('compsci', views.computer_science, name = "computer_science"),
    path('culinology', views.culinology, name = "culinology"),
    path('digital_media', views.digital_media, name = "digital_media"),
    path('fashion', views.fashion, name = "fashion"),
    path('law', views.law, name = "law"),
    path('calender', views.calender, name="calender")
]