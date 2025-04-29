from django.shortcuts import render
from .models import Announcement

# Create your views here
def announcement(request):
    announcements = Announcement.objects.filter().order_by('-created_at')
    return render(request, 'index.html', {'announcements': announcements})