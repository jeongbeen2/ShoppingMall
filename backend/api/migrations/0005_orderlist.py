# Generated by Django 3.1.4 on 2021-01-05 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210104_1926'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField(default='')),
                ('number', models.IntegerField(default=0)),
                ('size', models.TextField(default='')),
                ('color', models.TextField(default='')),
                ('address', models.TextField(default='')),
            ],
        ),
    ]
