with GNAT.OS_Lib; use GNAT.OS_Lib;

procedure Run_Wiki is
   Command : String_Access := Locate_Exec_On_Path ("cmd"); -- Windows
   Args    : Argument_List := (new String'("/c"), new String'("start index.html"));
   Success : Boolean;
begin
   Spawn (Command.all, Args, Success);
end Run_Wiki;
