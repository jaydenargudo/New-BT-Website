from django.shortcuts import render
from .models import Announcement

# Create your views here.

def home(request):
    announcements = Announcement.objects.filter(is_active=True).order_by('-created_at')
    return render(request, 'home.html', {'announcements': announcements})
