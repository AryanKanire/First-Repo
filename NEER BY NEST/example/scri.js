function search() {
    var searchInput = document.getElementById('searchInput').value;
    var searchOption = document.getElementById('searchOption').value;
    var url = searchOption + '?query=' + encodeURIComponent(searchInput);
    window.location.href = url;
  }
  