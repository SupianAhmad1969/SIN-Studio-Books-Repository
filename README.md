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

[styles.css.css](https://github.com/user-attachments/files/32038329/styles.css.css)
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f8f9fa;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #1e293b;
  color: #ffffff;
  text-align: center;
  padding: 2.5rem 1rem;
}

header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

header p {
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.search-container {
  max-width: 500px;
  margin: 0 auto;
}

.search-container input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.container {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
  flex: 1;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.book-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.book-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.book-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.book-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #0f172a;
}

.book-info .author {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.book-meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.rating {
  color: #eab308;
  font-weight: bold;
}

.badge {
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
}

.badge.tersedia {
  background-color: #dcfce7;
  color: #166534;
}

.badge.dipinjam {
  background-color: #fee2e2;
  color: #991b1b;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 100;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
}

footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #0f172a;
  color: #94a3b8;
  font-size: 0.85rem;
}

[app.js.js](https://github.com/user-attachments/files/32038336/app.js.js)
let booksData = [];

// 1. Ambil Data daripada JSON
async function fetchBooks() {
  try {
    const response = await fetch('data-buku.json');
    booksData = await response.json();
    renderBooks(booksData);
  } catch (error) {
    console.error('Gagal memuatkan data buku:', error);
    document.getElementById('book-grid').innerHTML = '<p>Gagal memuatkan pangkalan data.</p>';
  }
}

// 2. Paparkan Senarai Buku
function renderBooks(items) {
  const container = document.getElementById('book-grid');
  
  if (items.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Tiada buku dijumpai.</p>';
    return;
  }

  container.innerHTML = items.map(book => `
    <div class="book-card" onclick="openModal(${book.id})">
      <img src="${book.cover_url}" alt="${book.title}">
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <div class="book-meta">
          <span class="rating">★ ${book.rating}</span>
          <span class="badge ${book.status.toLowerCase()}">${book.status}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Fungsi Carian Secara Nyata (Real-time Search)
document.getElementById('search-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = booksData.filter(b => 
    b.title.toLowerCase().includes(query) || 
    b.author.toLowerCase().includes(query) ||
    b.category.toLowerCase().includes(query)
  );
  renderBooks(filtered);
});

// 4. Pengendalian Popup (Modal)
function openModal(id) {
  const book = booksData.find(b => b.id === id);
  if (!book) return;

  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <h2 style="margin-bottom: 0.5rem;">${book.title}</h2>
    <p style="color: #64748b; margin-bottom: 1rem;">Oleh: <strong>${book.author}</strong> (${book.category})</p>
    <p style="margin-bottom: 1rem; line-height: 1.5;">${book.review}</p>
    <p><strong>Status:</strong> ${book.status}</p>
    <p><strong>Penilaian:</strong> ★ ${book.rating} / 5.0</p>
  `;

  document.getElementById('book-modal').style.display = 'flex';
}

// Tutup Modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('book-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('book-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Jalankan skrip
fetchBooks();
