# Generated by Django 3.1.4 on 2021-01-03 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210102_1404'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='number',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
