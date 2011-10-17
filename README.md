Website project source for http://flug.dk
=========================================

## Required software

* Python 2.7
* PIL
* sass
* uglifyjs

## Install

### Install the required python packages

`pip install django django-compressor django-articles gravatar mysql-python`

### Setup MySQL database

It is assumed that there is a MySQL instance running on *localhost* with user *root* requiring no password, and it is assumed that this MySQL instance has a database called *flug*. Change these details in *flug/settings_env.py*.

Run the following command and follow the instructions to create the Admin account.

`python flug/manage.py syncdb`
