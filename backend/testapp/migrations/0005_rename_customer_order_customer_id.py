# Generated by Django 5.1.6 on 2025-02-23 12:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0004_alter_customuser_email'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='customer',
            new_name='customer_id',
        ),
    ]
