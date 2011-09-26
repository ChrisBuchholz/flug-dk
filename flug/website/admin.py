# -*- coding: utf8 -*-

from django.contrib import admin
from flug.website.models import Staff

class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')

admin.site.register(Staff, StaffAdmin)
