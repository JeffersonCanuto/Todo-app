from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(default='', max_length=100)
    description = models.CharField(default='', max_length=1000)
    completed = models.BooleanField(default=False, blank=True, null=True)
    pending = models.BooleanField(default=True, blank=True, null=True)
    actions = models.BooleanField(default=False, blank=True, null=True)
    
    def __str__(self):
        return self.title