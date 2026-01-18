Set WshShell = CreateObject("WScript.Shell")
' Using 127.0.0.1 to bypass localhost restrictions
WshShell.Run "http://127.0.0.1:8000/"
