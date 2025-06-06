from django.db import models

from django.db import models
import os
from supabase import create_client

# Load environment variables
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

MEDIA_URL = f"{SUPABASE_URL}/storage/v1/object/public/media/"

class UploadedFile(models.Model):
    image = models.ImageField(upload_to="uploads/")

    def save(self, *args, **kwargs):
        if not self.image:
            super().save(*args, **kwargs)
            return

        file_name = self.image.name  # Example: "myphoto.jpg"
        subfolder_path = f"photos/{file_name}"  # Now it goes into 'media/photos/'

        file_data = self.image.file  # File data

        print(f"Uploading {file_name} to Supabase in 'photos/' subfolder...")

        # Upload to Supabase inside the "photos/" folder
        response = supabase.storage.from_("media").upload(subfolder_path, file_data)

        if "error" in response:
            print(f"Upload failed: {response['error']}")
        else:
            print(f"File uploaded successfully: {MEDIA_URL}{subfolder_path}")
            self.image = f"{MEDIA_URL}{subfolder_path}"  # Store URL in database

        super().save(*args, **kwargs)

# Create your models here.
class Faculty(models.Model):
    first_name = models.CharField(max_length = 100, blank=True, null=True)
    last_name = models.CharField(max_length = 100, blank=True, null=True)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    description = models.TextField(blank = True)
    phone = models.CharField(max_length = 20)
    email = models.CharField(max_length = 50)
    is_mvp = models.BooleanField(default = False)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"