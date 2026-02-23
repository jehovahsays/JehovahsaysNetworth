use warp::Filter;

#[tokio::main]
async fn main() {
    let root = warp::path::end()
        .map(|| warp::reply::html(
            "<html><script>\
             var msg = new SpeechSynthesisUtterance('connected');\
             window.speechSynthesis.speak(msg);\
             setTimeout(()=> {location.href='/index.html'}, 500);\
             </script><body>Rust Gateway Active</body></html>"
        ));

    // Serves the current directory instead of /mev
    let current_dir = warp::fs::dir("./");

    let routes = root.or(current_dir);

    println!("MEV Rust Shield active on port 3030");
    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
