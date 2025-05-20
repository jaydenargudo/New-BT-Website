from django.contrib import admin
from .models import Faculty

class FacultyAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'is_mvp', 'email')
    list_display_links = ('id', 'full_name')
    list_editable = ('is_mvp',)
    search_fields = ('first_name', 'last_name', 'email')
    list_per_page = 20
    ordering = ('last_name', 'first_name')

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = 'Name'

admin.site.register(Faculty, FacultyAdmin)