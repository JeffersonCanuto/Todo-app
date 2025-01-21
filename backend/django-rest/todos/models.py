from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    completed = models.BooleanField(default=False, blank=True, null=True)
    status = models.CharField(max_length=10, default="")
    active = models.CharField(max_length=10, default="")

    def __str__(self):
        return self.title