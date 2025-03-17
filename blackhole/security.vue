<template>
  <div>
    <h1>Secure Vue Page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("contextmenu", event => event.preventDefault());
  }
}
</script>

<head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
  <meta http-equiv="X-Frame-Options" content="DENY">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
</head>