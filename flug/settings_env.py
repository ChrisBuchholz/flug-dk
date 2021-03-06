# -*- coding: utf8 -*-

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'flug',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}

COMPRESS_PRECOMPILERS = (
    ('text/x-sass', 'sass {infile} {outfile}'),
    # overwrite the uglifyjs command from settings.py to do nothing
    ('text/javascript', 'cp {infile} {outfile}'),
)

COMPRESS_OUTPUT_DIR = 'CACHE'
