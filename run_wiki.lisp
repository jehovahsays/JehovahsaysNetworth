(format t "Connecting to the MEV subconscious via Lisp...~%")
;; Using trivial-shell or standard system calls to launch the browser
#+win32 (uiop:run-program "cmd /c start http://127.0.0.1:8000/")
#+unix (uiop:run-program "open http://127.0.0.1:8000/")
