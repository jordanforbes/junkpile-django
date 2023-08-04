# Generated by Django 4.1.3 on 2023-08-04 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='app_projects/')),
                ('description', models.TextField()),
                ('year', models.IntegerField()),
                ('technologies', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Artwork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('image', models.ImageField(upload_to='artwork/')),
                ('medium', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
        ),
    ]
