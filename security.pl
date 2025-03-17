#!/usr/bin/perl
use strict;
use warnings;
print "Content-Type: text/html\n";
print "X-Frame-Options: DENY\n";
print "X-XSS-Protection: 1; mode=block\n";
print "X-Content-Type-Options: nosniff\n";
print "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\n\n";
print "<html><head><title>Secure Perl Page</title></head><body><h1>Welcome</h1></body></html>\n";