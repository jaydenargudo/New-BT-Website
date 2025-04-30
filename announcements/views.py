from django.shortcuts import render
from django.http import HttpResponse
from .models import Announcement

# Create your views here
def announcement(request):
    announcements = Announcement.objects.filter(is_active=True).order_by('-created_at')
    print("DEBUG: Announcements count =", announcements.count())
    return render(request, 'pages/index.html', {
        'announcements': announcements,
        'test_message': 'Hello from the view!',
    })

# def announcement(request):
#     # Direct text response to confirm the view is being called
#     return HttpResponse("""
#     <h1>DEBUG: ANNOUNCEMENT VIEW IS BEING CALLED</h1>
#     <p>This confirms that the URL routing to this view is working.</p>
#     <p>Found announcements: {count}</p>
#     <p>View function: {func}</p>
#     <p>URL path: {path}</p>
#     <hr>
#     <a href="/">Go back to homepage</a>
#     """.format(
#         count=Announcement.objects.count(),
#         func="announcement function in announcements/views.py",
#         path=request.path
#     ))