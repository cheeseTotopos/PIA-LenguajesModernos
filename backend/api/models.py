from django.db import models
from django.contrib.auth.models import User

class Note(models.Model): # Object Relational Model
    title = models.CharField(max_length=100)
    content = models.TextField() # no se pone un mínimo o máximo para que la nota tenga el texto que el usuario desee
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.model

# Create your models here.