program RunWiki;
uses ShellApi, Windows;

begin
  Writeln('MEV Bridge: Connecting...');
  ShellExecute(0, 'open', 'index.html', nil, nil, SW_SHOWNORMAL);
end.
