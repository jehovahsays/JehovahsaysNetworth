program MEV_Gateway;
uses sysutils;

begin
  WriteLn('Opening MEV Internal Wiki...');
  (* Execute the system command to open the browser *)
  ExecuteProcess('cmd.exe', ['/c', 'start', 'http://127.0.0.1:8000/']);
end.
