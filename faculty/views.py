from django.shortcuts import render
from .models import Faculty

def faculty_list(request):
    faculty_members = Faculty.objects.order_by('last_name', 'first_name')
    return render(request, 'pages/staff.html', {'faculty_members': faculty_members})


