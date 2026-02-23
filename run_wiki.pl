use strict;
use warnings;

print "MEV Perl Gateway: Connecting to subconscious...\n";
if ($^O eq 'MSWin32') {
    system("start index.html");
} else {
    system("open index.html");
}
