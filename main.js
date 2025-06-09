<script>
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c')) {
      e.preventDefault();
    }
  });
</script>
