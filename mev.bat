@echo off
setlocal
title MEV Gateway Launcher

:PROMPT
echo.
echo [1] Open Internal Subconscious (Local 127.0.0.1)
echo [2] Open External Conscious (GitHub)
echo [3] Exit
SET /P CHOICE=Select an option (1-3): 

IF "%CHOICE%"=="1" GOTO OPEN_LOCAL
IF "%CHOICE%"=="2" GOTO OPEN_GITHUB
IF "%CHOICE%"=="3" GOTO END
GOTO PROMPT

:OPEN_LOCAL
echo Launching local environment...
:: Using 127.0.0.1 to bypass browser 'localhost' restrictions
start /min python run_wiki.py
timeout /t 2 >nul
start http://127.0.0.1:8000/
exit

:OPEN_GITHUB
echo Opening external consciousness...
start https://jehovahsays.github.io/mev/
exit

:END
exit
