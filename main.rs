use warp::Filter;

#[tokio::main]
async fn main() {
    // 1. Root route with "connected" audio feedback
    let root = warp::path::end()
        .map(|| warp::reply::html(
            "<html><script>\
             var msg = new SpeechSynthesisUtterance('connected');\
             window.speechSynthesis.speak(msg);\
             setTimeout(()=> {location.href='/index.html'}, 500);\
             </script><body>Rust Gateway Active</body></html>"
        ));

    // 2. Serve the /mev folder
    let mev_folder = warp::fs::dir("./mev");

    let routes = root.or(mev_folder);

    println!("MEV Rust Shield active on port 3030");
    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
