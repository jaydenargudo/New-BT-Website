from django.shortcuts import render
from announcements.models import Announcement
from faculty.models import Faculty

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

def staff_page(request):
    faculty_members = Faculty.objects.all()
    return render(request, 'pages/staff.html', {'faculty_members': faculty_members})

def about(request):
    return render(request, 'pages/about.html')
def aerospace(request):
    return render(request, 'pages/aerospace.html')
def automotive(request):
    return render(request, 'pages/automotive.html')
def business(request):
    return render(request, 'pages/business.html')
def commercial_art(request):
    return render(request, 'pages/commercial_art.html')
def computer_science(request):
    return render(request, 'pages/computer_science.html')
def culinology(request):
    return render(request, 'pages/culinology.html')
def digital_media(request):
    return render(request, 'pages/digital_media.html')
def fashion(request):
    return render(request, 'pages/fashion.html')
def law(request):
    return render(request, 'pages/law.html')