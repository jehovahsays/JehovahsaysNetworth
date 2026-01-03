package main
import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    fs := http.FileServer(http.Dir("./mev"))
    // Specific route to match your PHP "connected" greeting
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        if r.URL.Path == "/" {
            w.Header().Set("Content-Type", "text/html")
            fmt.Fprintf(w, "<script>new SpeechSynthesisUtterance('connected').speak; window.location.href='/index.html';</script>")
            return
        }
        fs.ServeHTTP(w, r)
    })
    fmt.Println("MEV Go Server active on port 8080")
    http.ListenAndServe(":8080", nil)
}
