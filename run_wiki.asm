extern ShellExecuteA: proc
extern ExitProcess: proc

.data
    action db "open", 0
    target db "index.html", 0

.code
main proc
    sub rsp, 40
    xor rcx, rcx      
    lea rdx, action   
    lea r8,  target   
    xor r9,  r9      
    mov [rsp+32], r9 
    call ShellExecuteA
    xor rcx, rcx
    call ExitProcess
main endp
end
