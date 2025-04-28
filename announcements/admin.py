from django.contrib import admin

# Register your models here.
from .models import Announcement

class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_active')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title', 'message')

admin.site.register(Announcement, AnnouncementAdmin)