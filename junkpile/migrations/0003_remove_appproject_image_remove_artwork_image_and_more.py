# Generated by Django 4.2.4 on 2023-08-05 12:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('junkpile', '0002_appproject_github_url_appproject_project_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appproject',
            name='image',
        ),
        migrations.RemoveField(
            model_name='artwork',
            name='image',
        ),
        migrations.CreateModel(
            name='ArtworkImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='artwork/')),
                ('caption', models.CharField(blank=True, max_length=100)),
                ('artwork', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='artwork_images', to='junkpile.artwork')),
            ],
        ),
        migrations.CreateModel(
            name='AppProjectImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='app_projects/')),
                ('caption', models.CharField(blank=True, max_length=100)),
                ('appProject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='app_project_images', to='junkpile.appproject')),
            ],
        ),
    ]
