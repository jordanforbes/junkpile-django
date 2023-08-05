from django.contrib import admin
from .models import Artwork, ArtworkImage, AppProject, AppProjectImage

class ArtworkImageInline(admin.TabularInline):
    model = ArtworkImage

class ArtworkAdmin(admin.ModelAdmin):
    inlines = [ArtworkImageInline]

class AppProjectImageInline(admin.TabularInline):
    model = AppProjectImage

class AppProjectAdmin(admin.ModelAdmin):
    inlines = [AppProjectImageInline]

admin.site.register(Artwork, ArtworkAdmin)
admin.site.register(AppProject, AppProjectAdmin)
