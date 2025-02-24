from pydoc import describe
from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name= models.CharField(max_length=100)
    phone_number= models.CharField(max_length=100)
    description = models.TextField()
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.email