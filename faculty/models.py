from django.db import models

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