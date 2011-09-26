# -*- coding: utf8 -*-

from django.db import models

class Staff(models.Model):
    name = models.CharField('Navn', max_length=100)
    role = models.CharField('Rolle', max_length=30)
    homepage = models.URLField('Hjemmeside')
    photo = models.FileField('Portræt', blank=True, upload_to='attach/members')
