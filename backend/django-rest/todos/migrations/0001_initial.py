# Generated by Django 5.1.4 on 2025-01-21 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('completed', models.BooleanField(blank=True, default=False, null=True)),
                ('status', models.BooleanField(blank=True, default=False, null=True)),
                ('actions', models.BooleanField(blank=True, default=False, null=True)),
            ],
        ),
    ]
