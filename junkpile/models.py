from django.db import models

class Artwork(models.Model):
    title = models.CharField(max_length = 100)
    year = models.IntegerField()
    image = models.ImageField(upload_to='artwork/')
    medium = models.CharField(max_length = 100)
    description = models.TextField()

    def __str__(self):
        return self.title

class AppProject(models.Model):
    title = models.CharField(max_length = 100)
    image = models.ImageField(upload_to='app_projects/')
    description = models.TextField()
    year = models.IntegerField()
    technologies = models.TextField()

    def __str__(self):
        return self.title
