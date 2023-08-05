from django.db import models

class Artwork(models.Model):
    title = models.CharField(max_length = 100)
    year = models.IntegerField()
    medium = models.CharField(max_length = 100)
    description = models.TextField()

    def __str__(self):
        return self.title

class AppProject(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField()
    year = models.IntegerField()
    technologies = models.TextField()
    github_url = models.URLField(blank=True)
    project_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class ArtworkImage(models.Model):
    artwork = models.ForeignKey(Artwork, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='artwork/')
    caption = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f'Image for {self.artwork.title}'

class AppProjectImage(models.Model):
    appProject = models.ForeignKey(AppProject, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="app_projects/")
    caption = models.CharField(max_length=100, blank=True)
