from django.shortcuts import render
from .models import Announcement

# Create your views here
def announcement(request):
    announcements = Announcement.objects.filter(is_active=True).order_by('-created_at')
    print("DEBUG: Announcements count =", announcements.count())
    return render(request, 'pages/index.html', {
        'announcements': announcements,
        'test_message': 'Hello from the view!',
    })