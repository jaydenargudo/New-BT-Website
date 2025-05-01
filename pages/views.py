from django.shortcuts import render
from announcements.models import Announcement

# Create your views here.

def index(request):
    # Get all announcements
    announcements = Announcement.objects.all().order_by('-created_at')
    
    # Print debug info
    print(f"DEBUG: Found {announcements.count()} announcements in pages/views.py")
    
    # Your existing context data
    context = {
        # Include any existing context you have...
        
        # Add the announcements to the context
        'announcements': announcements,
    }
    
    return render(request, 'pages/index.html', context)
def staff(request):
    return render(request, 'pages/staff.html')