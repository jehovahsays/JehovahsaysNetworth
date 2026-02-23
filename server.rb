require 'webrick'
# Serves from the current directory
server = WEBrick::HTTPServer.new :Port => 8001, :DocumentRoot => '.'

server.mount_proc '/' do |req, res|
  if req.path == '/'
    res.body = "<html><script>new SpeechSynthesisUtterance('connected').speak(); setTimeout(()=>location.href='/index.html',500)</script></html>"
    res['Content-Type'] = 'text/html'
  else
    WEBrick::HTTPServlet::FileHandler.new(server, '.').do_GET(req, res)
  end
end

trap('INT') { server.shutdown }
puts "Ruby MEV active at http://127.0.0.1:8001"
server.start
