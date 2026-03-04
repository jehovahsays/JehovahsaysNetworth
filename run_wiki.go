package main
import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "text/html")
        fmt.Fprintf(w, "<script>new SpeechSynthesisUtterance('connected').speak; window.location.href='index.html';</script>")
    })
    http.Handle("/index.html", http.FileServer(http.Dir(".")))
    fmt.Println("MEV Go Server active on port 8080")
    http.ListenAndServe(":8080", nil)
}
