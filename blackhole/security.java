import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/")
public class IndexServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Set Secure Headers
        response.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'");
        response.setHeader("X-Frame-Options", "DENY");
        response.setHeader("X-Content-Type-Options", "nosniff");
        response.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
        response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
        response.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=(), payment=()");
        response.setHeader("X-XSS-Protection", "1; mode=block");

        // Return Secure HTML Page
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(
                "<!DOCTYPE html>" +
                "<html lang='en'>" +
                "<head>" +
                "    <meta charset='UTF-8'>" +
                "    <meta http-equiv='X-UA-Compatible' content='IE=edge'>" +
                "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
                "    <title>Secure Java Webpage</title>" +
                "    <script>" +
                "        'use strict';" +
                "        document.addEventListener('contextmenu', event => event.preventDefault());" +
                "    </script>" +
                "</head>" +
                "<body>" +
                "    <h1>Welcome to the Secure Java Webpage</h1>" +
                "    <p>Your connection is protected with security best practices.</p>" +
                "</body>" +
                "</html>"
        );
    }
}