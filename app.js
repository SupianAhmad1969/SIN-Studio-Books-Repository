async function loadBooks() {
  try {
    const res = await fetch('https://sheetdb.io/api/v1/o2poecvxm98m7');
    const books = await res.json();
    render(books);

    document.getElementById('search-input').addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = books.filter(b => 
        b.title.toLowerCase().includes(query) || 
        b.author.toLowerCase().includes(query)
      );
      render(filtered);
    });
  } catch (err) {
    console.error("Gagal membaca data buku", err);
  }
}

function render(items) {
  const container = document.getElementById('book-grid');
  if (items.length === 0) {
    container.innerHTML = '<p>Tiada buku dijumpai.</p>';
    return;
  }
  container.innerHTML = items.map(b => `
    <div class="card">
      <img src="${b.cover_url}" alt="${b.title}">
      <h3>${b.title}</h3>
      <p>${b.author}</p>
    </div>
  `).join('');
}

loadBooks();
