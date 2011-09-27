# -*- coding: utf8 -*-

from django.shortcuts import render_to_response
from django.template import RequestContext
from flug.website.models import Staff
from articles.models import Article

def index(request):
    stash = {
        'page': 'index',
        'title': 'Hjem',
        'articles': Article.objects.live()[0:2]
    }

    return render_to_response('index.html', stash, context_instance =
                              RequestContext(request))

def about(request):
    staff = Staff.objects.all()
    stash = {
        'page': 'about',
        'title': 'Om os',
        'staff': staff
    }

    return render_to_response('about.html', stash, context_instance =
                              RequestContext(request))
