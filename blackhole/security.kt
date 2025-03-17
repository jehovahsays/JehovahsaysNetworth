import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.response.headers.append(HttpHeaders.ContentSecurityPolicy, "default-src 'self'")
                call.response.headers.append(HttpHeaders.XFrameOptions, "DENY")
                call.response.headers.append(HttpHeaders.XContentTypeOptions, "nosniff")
                call.response.headers.append(HttpHeaders.StrictTransportSecurity, "max-age=63072000; includeSubDomains; preload")
                call.respondText("<h1>Secure Kotlin Web Page</h1>", ContentType.Text.Html)
            }
        }
    }.start(wait = true)
}