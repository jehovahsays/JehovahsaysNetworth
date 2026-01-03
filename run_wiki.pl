use strict;
use warnings;

print "MEV Perl Gateway: Connecting to subconscious...\n";
# Triggers the default system browser
if ($^O eq 'MSWin32') {
    system("start http://127.0.0.1:8000/");
} else {
    system("open http://127.0.0.1:8000/");
}
