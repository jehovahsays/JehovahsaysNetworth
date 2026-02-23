(format t "Connecting to the MEV subconscious via Lisp...~%")
#+win32 (uiop:run-program "cmd /c start index.html")
#+unix (uiop:run-program "open index.html")
