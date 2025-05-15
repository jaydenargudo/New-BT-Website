from django.shortcuts import render
from .models import Faculty

def faculty_list(request):
    faculty_members = Faculty.objects.all()
    # print("💡 faculty_list view triggered")
    # print(faculty_members)
    return render(request, 'pages/staff.html', {'faculty_members': faculty_members})
