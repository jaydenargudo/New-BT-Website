from django.urls import path
from . import views

# urlpatterns = [
#     # path('faculty', views.faculty_list, name='faculty_list')
#     path('', views.faculty_list, name='faculty_list')
# ]

urlpatterns = [
    path('staff/', views.faculty_list, name='faculty_list'),
]