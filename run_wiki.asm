; Simple x64 Assembly to launch URL
extern ShellExecuteA: proc
extern ExitProcess: proc

.data
    action db "open", 0
    url    db "http://127.0.0.1:8000/", 0

.code
main proc
    sub rsp, 40
    xor rcx, rcx      ; hwnd = NULL
    lea rdx, action   ; lpOperation = "open"
    lea r8,  url      ; lpFile = URL
    xor r9,  r9      ; lpParameters = NULL
    mov [rsp+32], r9 ; nShowCmd = SW_HIDE/NULL
    call ShellExecuteA
    xor rcx, rcx
    call ExitProcess
main endp
end
