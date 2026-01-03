using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Mirroring the PHP "connected" logic for the root path
app.MapGet("/", async context =>
{
    context.Response.ContentType = "text/html";
    await context.Response.WriteAsync(@"
        <html>
            <body onload=""new SpeechSynthesisUtterance('connected').speak"">
                <script>
                    setTimeout(() => { window.location.href = '/index.html'; }, 500);
                </script>
                <p>C# Gateway: Connecting to MEV...</p>
            </body>
        </html>");
});

// Serve the 'mev' folder as the static root
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "mev")),
    RequestPath = ""
});

app.Run("http://localhost:5000");
