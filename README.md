[index.html.html](https://github.com/user-attachments/files/32038296/index.html.html)

<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Katalog Buku Perpustakaan</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Header & Bar Carian -->
  <header>
    <h1>📚 Katalog Perpustakaan Web</h1>
    <p>Cari dan terokai koleksi buku kegemaran anda</p>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Cari tajuk buku, penulis, atau kategori...">
    </div>
  </header>

  <!-- Grid Kad Buku -->
  <main class="container">
    <div id="book-grid" class="book-grid">
      <!-- Kad buku akan dijana secara automatik oleh JavaScript di sini -->
    </div>
  </main>

  <!-- Tetingkap Modal (Popup Ulasan) -->
  <div id="book-modal" class="modal">
    <div class="modal-content">
      <span class="close-btn" id="close-modal">&times;</span>
      <div id="modal-body">
        <!-- Detail buku akan dipaparkan di sini -->
      </div>
    </div>
  </div>

  <footer>
    <p>&copy; 2026 Katalog Web Perpustakaan. Dihoskan di GitHub Pages.</p>
  </footer>

  <script src="app.js"></script>
</body>
</html>
