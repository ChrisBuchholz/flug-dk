# -*- coding: utf8 -*-

import os

DEBUG = False
TEMPLATE_DEBUG = DEBUG

PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))

ADMINS = ()

MANAGERS = ADMINS

TIME_ZONE = None

LANGUAGE_CODE = 'da-dk'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

MEDIA_URL = '/static/img/'

STATIC_URL = '/static/'

ADMIN_MEDIA_PREFIX = '/static/admin/'

STATICFILES_DIRS = ()

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#   'django.contrib.staticfiles.finders.DefaultStorageFinder',
    'compressor.finders.CompressorFinder',
)

SECRET_KEY = '0+vc#&4h2j=+nu)d66-&%tnl8vq4kf(4pxw1=vmkkk=#c95u-y'

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#   'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

ROOT_URLCONF = 'flug.urls'

TEMPLATE_DIRS = (
    PROJECT_DIR + "/website/templates"
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.markup',
    'django.contrib.admin',
    'django.contrib.admindocs',
    'compressor',
    'articles',
    'gravatar',
    'flug.website',
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.auth.context_processors.auth',
    'django.contrib.messages.context_processors.messages',
)

COMPRESS_PRECOMPILERS = (
    ( 'text/x-sass', 'sass -t compressed {infile} {outfile}' ),
    ( 'text/javascript', 'uglifyjs -o {outfile} {infile}' ),
)

COMPRESS_OUTPUT_DIR = ''

DISQUS_USER_API_KEY = 'Bw1QH9GjRKYOL1S3p2yFBd47v37bOJ78jx1MaGJawwPDbILMrbRMcOY7OFKxX0XZ'
DISQUS_FORUM_SHORTNAME = 'flug'

ARTICLE_PAGINATION = 9999999
ARTICLES_TEASER_LIMIT = 104

TEASE_LENGTH = 104

try:
    from settings_env import *
except ImportError:
    pass
