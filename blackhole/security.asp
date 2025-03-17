<%@ Page Language="VB" %>
<%
Response.AddHeader "Content-Security-Policy", "default-src 'self'"
Response.AddHeader "X-Frame-Options", "DENY"
Response.AddHeader "X-Content-Type-Options", "nosniff"
Response.AddHeader "Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"
%>
<html>
<head>
    <title>Secure ASP.NET Page</title>
</head>
<body>
    <h1>Welcome to the Secure ASP.NET Page</h1>
</body>
</html>