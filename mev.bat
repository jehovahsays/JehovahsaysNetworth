@echo off
setlocal
title MEV Gateway Launcher

:PROMPT
echo.
echo [1] Open Local index.html
echo [2] Open External (GitHub)
echo [3] Exit
SET /P CHOICE=Select (1-3): 

IF "%CHOICE%"=="1" GOTO OPEN_LOCAL
IF "%CHOICE%"=="2" GOTO OPEN_GITHUB
IF "%CHOICE%"=="3" GOTO END
GOTO PROMPT

:OPEN_LOCAL
start index.html
exit

:OPEN_GITHUB
start https://jehovahsays.github.io/mev/
exit

:END
exit
