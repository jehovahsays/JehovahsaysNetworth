with Ada.Text_IO;
with Ada.Characters.Latin_1;
with GNAT.OS_Lib;

procedure Run_Wiki is
   Command : String := "index.html";
   Success : Boolean;
begin
   Ada.Text_IO.Put_Line("MEV Ada Shield: Redirecting...");
   GNAT.OS_Lib.Spawn("cmd.exe", (1 => new String'("/c"), 2 => new String'("start " & Command)), Success);
end Run_Wiki;
