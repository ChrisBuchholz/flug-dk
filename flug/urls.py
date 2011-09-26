# -*- coding: utf8 -*-

from django.conf.urls.defaults import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', 'flug.website.views.index'),
    (r'^omos/$', 'flug.website.views.about'),
    (r'^blog/', include('articles.urls')),
    (r'^admin/', include(admin.site.urls))
)
