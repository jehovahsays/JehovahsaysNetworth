program MEV_Gateway;
uses sysutils;

begin
  WriteLn('Opening MEV Internal Wiki...');
  ExecuteProcess('cmd.exe', ['/c', 'start', 'index.html']);
end.
