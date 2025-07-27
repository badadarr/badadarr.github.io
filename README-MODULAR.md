# Portfolio Modular Architecture

## 📁 Struktur Folder

```
portfolio/
├── config/
│   └── config.js              # Konfigurasi utama (data personal, skills, projects)
├── components/
│   ├── header.js              # Komponen navigasi
│   ├── hero.js                # Komponen hero section
│   ├── skills.js              # Komponen skills & expertise
│   ├── projects.js            # Komponen portfolio projects
│   └── contact.js             # Komponen contact form
├── style/
│   ├── main.css               # CSS utama
│   └── animations.css         # CSS animasi
├── images/                    # Folder gambar
├── app.js                     # File aplikasi utama
├── index-modular.html         # HTML utama (versi modular)
└── README-MODULAR.md          # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Setup Dasar
```bash
# Clone repository
git clone https://github.com/badadarr/badadarr.github.io.git
cd badadarr.github.io

# Buka index-modular.html di browser
```

### 2. Kustomisasi Data Personal

Edit file `config/config.js`:

```javascript
const CONFIG = {
  personal: {
    name: "Nama Anda",
    title: "Profesi Anda",
    email: "email@anda.com",
    phone: "nomor-telepon",
    bio: "Deskripsi singkat tentang Anda"
  },
  
  social: {
    github: "https://github.com/username-anda",
    linkedin: "https://linkedin.com/in/username-anda"
  },
  
  skills: {
    technical: [
      { name: "HTML5", level: 90, icon: "fab fa-html5" },
      // Tambah skill lainnya...
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Project Anda",
      description: "Deskripsi project",
      image: "./images/project1.png",
      technologies: ["React", "CSS", "JavaScript"]
    }
    // Tambah project lainnya...
  ]
};
```

### 3. Menambah Komponen Baru

Buat file baru di folder `components/`:

```javascript
// components/new-section.js
class NewSection {
  constructor(config) {
    this.config = config;
  }

  render() {
    return `
      <section id="new-section" class="new-section">
        <!-- HTML content -->
      </section>
    `;
  }

  init() {
    // JavaScript functionality
  }
}
```

Tambahkan ke `app.js`:

```javascript
// Di initComponents()
this.components.newSection = new NewSection(this.config);

// Di render()
${this.components.newSection.render()}
```

### 4. Setup Form Contact

1. Daftar di [Formspree](https://formspree.io)
2. Buat form baru dan dapatkan Form ID
3. Update `config/config.js`:

```javascript
form: {
  formspreeId: "YOUR_ACTUAL_FORM_ID", // Ganti dengan ID Formspree Anda
}
```

## 🎨 Kustomisasi Styling

Edit file CSS di folder `style/`:

- `main.css` - Styling utama
- `animations.css` - Animasi dan transisi

## 📱 Responsive Design

Portfolio sudah responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Fitur Modular

### ✅ Keuntungan Struktur Modular:

1. **Mudah Dipahami**: Setiap komponen terpisah dan fokus pada satu fungsi
2. **Mudah Dikustomisasi**: Ubah data di config.js tanpa menyentuh kode
3. **Mudah Diperluas**: Tambah komponen baru dengan mudah
4. **Mudah Maintenance**: Bug fixing lebih mudah karena kode terorganisir
5. **Reusable**: Komponen bisa digunakan ulang di project lain

### 🎯 Untuk User yang Fork:

1. **Fork repository** ini
2. **Edit `config/config.js`** dengan data Anda
3. **Ganti gambar** di folder `images/`
4. **Deploy** ke GitHub Pages atau hosting lainnya

## 🚀 Deployment

### GitHub Pages:
1. Push ke repository GitHub Anda
2. Aktifkan GitHub Pages di Settings
3. Pilih branch main/master
4. Portfolio akan tersedia di `https://username.github.io/repository-name`

### Netlify:
1. Connect repository ke Netlify
2. Set build command: (kosong)
3. Set publish directory: `/`
4. Deploy otomatis setiap push

## 📋 Checklist untuk Fork

- [ ] Edit data personal di `config/config.js`
- [ ] Ganti foto profil di `images/`
- [ ] Update project screenshots
- [ ] Setup Formspree untuk contact form
- [ ] Test semua link dan functionality
- [ ] Deploy ke hosting pilihan

## 🤝 Kontribusi

Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: badar.maulana.techno@gmail.com
- LinkedIn: [linkedin.com/in/badadarrs](https://www.linkedin.com/in/badadarrs/)
- GitHub: [github.com/badadarr](https://github.com/badadarr)

---

**Happy Coding! 🚀**