from django.contrib import admin
from .models import Faculty

class FacultyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_mvp', 'email')
    list_display_links = ('id', 'name')
    list_editable = ('is_mvp',)
    search_fields = ('name',)
    list_per_page = 20
    
# Register your models here.
admin.site.register(Faculty, FacultyAdmin)