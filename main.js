<script>
// Blok klik kanan
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  console.log("Klik kanan diblokir");
});

// Blok kombinasi tombol Ctrl+U, Ctrl+S, Ctrl+C, F12, Ctrl+A
document.addEventListener('keydown', function(e) {
  if (
    e.ctrlKey && ['u', 's', 'c', 'a'].includes(e.key.toLowerCase()) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    console.log("Shortcut diblokir");
  }
});

</script>
