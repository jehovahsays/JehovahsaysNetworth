with Ada.Text_IO;
with Ada.Characters.Latin_1;
with GNAT.OS_Lib;

procedure Run_Wiki is
   Command : String := "start http://127.0.0.1:8000/";
   Args    : GNAT.OS_Lib.Argument_List := (others => null);
   Success : Boolean;
begin
   Ada.Text_IO.Put_Line("MEV Ada Shield: Redirecting...");
   GNAT.OS_Lib.Spawn("cmd.exe", (1 => new String'("/c"), 2 => new String'(Command)), Success);
end Run_Wiki;
