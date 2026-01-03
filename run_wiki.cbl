       IDENTIFICATION DIVISION.
       PROGRAM-ID. MEV-LAUNCHER.
       
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 BROWSER-CMD  PIC X(50) VALUE "start http://127.0.0.1:8000/".

       PROCEDURE DIVISION.
           DISPLAY "Connecting to MEV Legacy Foundation...".
           *> This executes a system shell command to open the browser
           CALL "SYSTEM" USING BROWSER-CMD.
           STOP RUN.
