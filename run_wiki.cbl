IDENTIFICATION DIVISION.
       PROGRAM-ID. MEV-LAUNCHER.
       
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 BROWSER-CMD  PIC X(50) VALUE "index.html".

       PROCEDURE DIVISION.
           DISPLAY "Connecting to MEV Legacy Foundation...".
           CALL "SYSTEM" USING BROWSER-CMD.
           STOP RUN.
