

// ====================================

function initOpeningAnimation() {
  const overlay = document.getElementById('opening-overlay');
  const skipButton = document.getElementById('skip-button');
  const loadingProgress = document.getElementById('loading-progress');
  const loadingText = document.getElementById('loading-text');
  const floatingHearts = document.getElementById('floating-hearts');
  
  // Buat hati-hati kecil yang mengambang
  function createFloatingHearts() {
      for (let i = 0; i < 15; i++) {
          const heart = document.createElement('div');
          heart.className = 'floating-heart';
          heart.innerHTML = '❤️';
          
          // Posisi acak
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 3 + Math.random() * 4;
          
          heart.style.left = `${left}%`;
          heart.style.animation = `floatUp ${duration}s ease-in-out ${delay}s infinite`;
          
          floatingHearts.appendChild(heart);
      }
  }
  
  // Update loading progress dengan pesan lucu
  const loadingMessages = [
      "Menyiapkan cerita cinta...",
      "Memuat kata-kata manis...",
      "Menyusun kenangan indah...",
      "Menyiapkan bunga dan puisi...",
      "Hampir selesai...",
      "Siap untuk jatuh cinta lagi! 💕"
  ];
  
  let progress = 0;
  let messageIndex = 0;
  
  const loadingInterval = setInterval(() => {
      // Update progress
      progress += Math.random() * 10 + 5;
      if (progress > 100) progress = 100;
      
      loadingProgress.style.width = `${progress}%`;
      
      // Update pesan setiap 25% progress
      const newMessageIndex = Math.floor(progress / 25);
      if (newMessageIndex > messageIndex && newMessageIndex < loadingMessages.length) {
          messageIndex = newMessageIndex;
          loadingText.textContent = loadingMessages[messageIndex];
          
          // Tambahkan efek ketikan
          loadingText.style.opacity = 0;
          setTimeout(() => {
              loadingText.style.transition = 'opacity 0.3s ease';
              loadingText.style.opacity = 1;
          }, 100);
      }
      
      // Selesai loading
      if (progress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
              closeOpeningAnimation();
          }, 800);
      }
  }, 300);
  
  // Fungsi untuk menutup animasi pembukaan
  function closeOpeningAnimation() {
      overlay.classList.add('hidden');
      
      // Hapus overlay dari DOM setelah animasi selesai
      setTimeout(() => {
          overlay.remove();
          
          // Tampilkan konten utama dengan efek fade in
          document.body.style.opacity = '0';
          setTimeout(() => {
              document.body.style.transition = 'opacity 0.8s ease';
              document.body.style.opacity = '1';
          }, 100);
      }, 800);
  }
  
  // Skip button
  skipButton.addEventListener('click', () => {
      clearInterval(loadingInterval);
      loadingProgress.style.width = '100%';
      loadingText.textContent = "Siap! 💖";
      
      setTimeout(() => {
          closeOpeningAnimation();
      }, 500);
  });
  
  // Skip dengan tombol ESC
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
          skipButton.click();
      }
  });
  
  // Mulai animasi
  setTimeout(() => {
      createFloatingHearts();
  }, 500);
}

// Panggil fungsi animasi pembukaan saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initOpeningAnimation();
  
  // Tunggu sebentar sebelum melanjutkan inisialisasi utama
  setTimeout(() => {
      // Kode utama yang sudah ada...
      // (semua kode utama yang sudah ada di novel_bucin.js)
  }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
  const NOVEL = {
    title: "Bucin: Surat Cinta yang Tersimpan",
    chapters: [
      {
        title: "Prolog — pertemuan pertama",
        content: `malam itu, kota tampak tenang setelah hujan yang baru saja reda. Langit berwarna keemasan, dan aspal di sepanjang jalan masih basah, memantulkan cahaya matahari yang mulai tenggelam
,Beberapa menit kemudian, Caca muncul dari arah seberang jalan,dia seyum yang sangat manis dan matanya yang bersinar seakan menandai bahwa ia tahu ada sesuatu yang istimewa akan terjadi.
Ketika mereka berdiri berhadap-hadapan, Bara menyerahkan bunga itu,bunga itu nampak segar dan harum seolah membawa energi hangat di tengah cahaya senja.
Tanpa menunggu lama, ia mengulurkan kotak kecil yang rapi — hadiah sederhana namun penuh makna, dibungkus dengan kertas cokelat lembut.
Caca menerima keduanya dengan senyum manis yang membuat jantung Bara terasa ringan. Tidak ada kata, hanya tatapan dan kehangatan yang terpancar. Di momen itu, dunia di sekitar mereka seakan berhenti sejenak.

Mereka berdiri di pinggir jalan, dikelilingi cahaya bulan dan bintang, dan Bara menatap Caca dengan perasaan yang belum sempat ia ungkapkan dengan kata-kata: pertemuan ini, sederhana tapi begitu sempurna, adalah awal dari sesuatu yang akan tumbuh perlahan, namun pasti.

Caca menatap bunga dan hadiah itu, merasakan hangatnya ketulusan yang datang begitu saja, dan dalam hati kecilnya ia tahu, ini bukan pertemuan biasa. Ini adalah awal dari cerita yang akan mereka jalani bersama — manis, bahagia, dan penuh rasa syukur atas kebetulan kecil yang membawa mereka bertemu.`,
        image: "WhatsApp Image 2025-11-04 at 13.20.28.jpeg"
      },
      {
        title: "Bab 1: Hari Hari Yang Hangat",
        content: `Setelah pertemuan pertama yang manis di pinggir jalan, Bara dan Caca mulai terbiasa dengan kehadiran satu sama lain, meskipun hanya lewat senyum dan sapaan singkat di awal. Tidak ada kata-kata berlebihan, hanya perhatian kecil yang muncul secara alami
Bara membawa bunga atau hadiah kecil sesekali, selalu tanpa alasan yang besar, hanya untuk melihat senyum Caca yang hangat. Caca, di sisi lain, menemukan kenyamanan dari ketulusan Bara yang sederhana, dan setiap kali mereka bertemu, hari-harinya terasa lebih ringan
Mereka mulai saling mengenal tanpa terburu-buru.Hari-hari itu terasa ringan, penuh tawa yang muncul tanpa alasan, dan kehangatan yang terus bertambah dari pertemuan sederhana mereka. Tanpa sadar, kedua hati itu mulai saling terbiasa, saling menunggu momen-momen kecil yang seakan hanya mereka yang mengerti.

Bara dan Caca belajar bahwa cinta bisa hadir tanpa drama besar, tanpa kata-kata megah. Cinta bisa sederhana — seperti bunga yang diberikan Bara, atau senyum hangat Caca saat menerima perhatian kecil. Dan di setiap langkah sore itu, keduanya merasakan bahwa awal cerita ini, walau sederhana, adalah awal yang paling indah.`,
        image: "p.jpg"
      },
      {
        title: "Bab 2: Hari-Hari yang Penuh Kebahagiaan",
        content: `Hari-hari Bara dan Caca kini dipenuhi kebiasaan kecil yang manis. Setiap kali mereka bertemu, senyum yang muncul terasa hangat, seolah memberi energi untuk menghadapi sisa hari. Mereka sering berjalan di pantai yang sama, menikmati udara sore sambil sesekali berhenti melihat daun yang berguguran perlahan.

Bara selalu membawa hal-hal sederhana — bunga, cokelat, atau makanan ringan yang ia tahu akan disukai Caca. Dan setiap pemberian itu selalu diterima dengan senyum yang membuat hati Bara terasa lega dan bahagia.

Caca, sebaliknya, menikmati momen-momen itu tanpa perlu banyak kata. Kehadiran Bara membuatnya merasa nyaman, aman, dan diperhatikan. Setiap langkah mereka di sore yang sama, setiap cahaya matahari yang menembus pepohonan, seakan menjadi saksi bagi cinta kecil yang tumbuh perlahan namun pasti.

Mereka belajar bahwa kebahagiaan bisa datang dari hal-hal sederhana. Tidak perlu janji besar atau kata-kata megah, karena kehangatan dari perhatian kecil dan waktu yang dihabiskan bersama sudah cukup untuk membuat hati terasa penuh.

Dan dalam tiap pertemuan yang terus berulang, Bara dan Caca merasakan bahwa cinta mereka bukan tentang ledakan perasaan, melainkan tentang ketenangan yang membuat hidup terasa lengkap.`,
        image: "WhatsApp Image 2025-11-04 at 13.12.28 (1).jpeg"
      },
      {
        title: "Bab 3: Bertumbuh Bersama",
        content: `Hari-hari berganti, musim berubah, tapi cinta mereka tetap sama — bahkan semakin kuat. Bara dan Caca kini menapaki hidup dengan langkah yang lebih dewasa. Mereka belajar saling memahami, memberi ruang, dan menghargai hal-hal kecil yang sering terlupakan.

Mereka tidak lagi sibuk mencari makna cinta, karena mereka telah menemukannya dalam keseharian yang mereka jalani bersama. Dalam tawa yang muncul di tengah lelah, dalam tatapan yang saling menguatkan, dalam diam yang justru membawa ketenangan.

mereka menyadari bahwa cinta sejati tidak selalu tentang kisah luar biasa, tetapi tentang keberanian untuk terus memilih satu sama lain setiap hari. Tidak peduli seberapa banyak hal berubah, mereka tetap tahu ke mana hati mereka akan pulang.

Cinta mereka tumbuh perlahan, tapi pasti. Seperti tanaman yang dirawat dengan sabar, yang mekar pada waktunya sendiri — indah tanpa harus dipaksa, hangat tanpa harus dijelaskan.`,
        image: "WhatsApp Image 2025-11-04 at 13.12.29.jpeg"
      },
      {
        title: "Epilog — Cinta Yang Menetap",
        content: `Hari Demi Hari berlalu, dan Bara serta Caca tetap bersama, menapaki hidup dengan bahagia dan damai. Tidak ada dramatisasi, tidak ada kata-kata berlebihan. Hanya ketenangan dan kehangatan yang terus mengalir di antara mereka.

Mereka sering duduk di balkon rumah sambil menyesap teh hangat, melihat langit sore yang berubah warna perlahan. Bara masih memberikan bunga sesekali, Caca masih tersenyum hangat setiap kali menerimanya.

Cinta mereka tetap sederhana, namun kokoh. Setiap momen yang mereka lewati bersama menjadi bukti bahwa kebahagiaan sejati tidak selalu harus meledak-ledak. Ia hadir dalam ketulusan, perhatian kecil, dan pilihan untuk tetap bersama setiap hari.

Dan di akhir hari, mereka menyadari bahwa cinta sejati bukan soal bagaimana ia dimulai, tapi bagaimana ia terus tumbuh, bertahan, dan membuat dua hati merasa pulang.`,
        image: "WhatsApp Image 2025-11-04 at 13.12.29 (1).jpeg"
      },
      {
        title: "Kemesraan — Galeri Kenangan",
        image: "WhatsApp Image 2025-11-03 at 22.54.04.jpeg",
        content: `
          <div class="kemesraan-gallery">
            <!-- Foto -->
            <div class="gallery-item" data-type="image">
              <img src="WhatsApp Image 2025-11-03 at 22.54.03.jpeg" alt="Foto Kenangan 1" loading="lazy">
            </div>
            <div class="gallery-item" data-type="image">
              <img src="WhatsApp Image 2025-11-04 at 12.39.21.jpeg" alt="Foto Kenangan 2" loading="lazy">
            </div>
            <div class="gallery-item" data-type="image">
              <img src="WhatsApp Image 2025-11-04 at 15.12.55.jpeg" alt="Foto Kenangan 3" loading="lazy">
            </div>

            <!-- Video -->
            <div class="gallery-item" data-type="video">
              <video muted loop playsinline>
                <source src="WhatsApp Video 2025-11-05 at 20.03.55.mp4" type="video/mp4">
              </video>
              <div class="play-button">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
        `
      }
    ]
  };

  // DOM Elements
  const chapterList = document.getElementById('chapter-list');
  const chapterTitle = document.getElementById('chapter-title');
  const contentArea = document.getElementById('content-area');
  const prevBtn = document.getElementById('prev-chapter');
  const nextBtn = document.getElementById('next-chapter');
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');
  const toggleMenu = document.getElementById('toggle-menu');

  let index = 0;
  let fontSize = 16;
  let isTransitioning = false;

  // Smooth scroll helper
  function smoothScrollTo(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Build chapter list with stagger animation
  function buildList() {
    const listWrap = document.createElement('div');
    NOVEL.chapters.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'chapter-btn';
      btn.innerHTML = `<i class="fas fa-bookmark"></i><div class="title">${c.title}</div>`;
      btn.style.opacity = '0';
      btn.style.transform = 'translateX(-20px)';
      btn.addEventListener('click', () => showChapter(i));
      btn.dataset.idx = i;
      listWrap.appendChild(btn);
    });
    
    // Clear existing and append
    const existingBtns = chapterList.querySelectorAll('.chapter-btn');
    existingBtns.forEach(n => n.remove());
    chapterList.appendChild(listWrap);
    
    // Stagger reveal animation
    Array.from(listWrap.children).forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }, 100 * i);
    });
  }

  // Preload image helper with error handling
  function preloadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  // Show chapter with smooth animations
  async function showChapter(i) {
    if (i < 0 || i >= NOVEL.chapters.length || isTransitioning) return;
    
    isTransitioning = true;
    index = i;
    const ch = NOVEL.chapters[i];
    
    // Update title with animation
    chapterTitle.style.opacity = '0';
    chapterTitle.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      chapterTitle.textContent = ch.title;
      chapterTitle.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      chapterTitle.style.opacity = '1';
      chapterTitle.style.transform = 'translateY(0)';
    }, 150);
    
    // Disable nav while loading
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    
    // Fade out current content
    const contentBlock = contentArea.querySelector('.chapter-content');
    const featuredImg = contentArea.querySelector('.featured-image img');
    
    if (contentBlock) {
      contentBlock.style.opacity = '0';
      contentBlock.style.transform = 'translateY(20px)';
    }
    
    if (featuredImg) {
      featuredImg.style.opacity = '0';
      featuredImg.style.transform = 'scale(0.95)';
    }
    
    // Preload and show image with smooth transition
    if (featuredImg && ch.image) {
      await new Promise(resolve => {
        featuredImg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        featuredImg.src = ch.image;
        featuredImg.onload = () => {
          setTimeout(() => {
            featuredImg.style.opacity = '1';
            featuredImg.style.transform = 'scale(1)';
            resolve();
          }, 100);
        };
        featuredImg.onerror = () => resolve();
      });
    }
    
    // Show content with stagger animation
    setTimeout(() => {
      if (contentBlock) {
        contentBlock.innerHTML = ch.content;
        contentBlock.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        contentBlock.style.opacity = '0';
        contentBlock.style.transform = 'translateY(30px)';
        
        // Animate paragraphs with stagger
        setTimeout(() => {
          contentBlock.style.opacity = '1';
          contentBlock.style.transform = 'translateY(0)';
          
          const paragraphs = contentBlock.querySelectorAll('p');
          paragraphs.forEach((p, idx) => {
            p.style.opacity = '0';
            p.style.transform = 'translateY(20px)';
            setTimeout(() => {
              p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              p.style.opacity = '1';
              p.style.transform = 'translateY(0)';
            }, 100 * idx);
          });
        }, 100);
      }
      
      // Initialize gallery if it's the kemesraan chapter
      if (i === NOVEL.chapters.length - 1) {
        setTimeout(() => {
          initGallery();
        }, 500);
      }
      
      // Enable navigation
      prevBtn.disabled = (i === 0);
      nextBtn.disabled = (i === NOVEL.chapters.length - 1);
      
      // Update active chapter in list with animation
      document.querySelectorAll('.chapter-btn').forEach(btn => {
        const wasActive = btn.classList.contains('active');
        const isActive = +btn.dataset.idx === i;
        
        if (wasActive && !isActive) {
          btn.style.transform = 'translateX(0) scale(1)';
        }
        
        btn.classList.toggle('active', isActive);
        
        if (isActive) {
          btn.style.transform = 'translateX(8px) scale(1.03)';
        }
      });
      
      // Update progress bar
      updateProgress();
      
      // Scroll to top smoothly
      smoothScrollTo(contentArea, 100);
      
      isTransitioning = false;
    }, 300);
  }

  // Initialize gallery interactions
  function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, idx) => {
      // Set animation delay
      item.style.animationDelay = `${0.1 * idx}s`;
      
      // Handle video play/pause
      const video = item.querySelector('video');
      if (video) {
        item.addEventListener('click', (e) => {
          if (e.target === video || e.target.closest('.play-button')) return;
          
          if (video.paused) {
            video.play();
            item.classList.add('playing');
          } else {
            video.pause();
            item.classList.remove('playing');
          }
        });
      }
      
      // Lightbox for images and videos
      item.addEventListener('click', (e) => {
        if (e.target.closest('.play-button')) {
          if (video) {
            video.play();
            item.classList.add('playing');
          }
          return;
        }
        
        const media = item.querySelector('img, video');
        if (!media) return;
        
        openLightbox(media.cloneNode(true), media.tagName === 'VIDEO');
      });
    });
  }

  // Lightbox functionality
  function openLightbox(mediaElement, isVideo) {
    // Remove existing lightbox
    const existing = document.querySelector('.lightbox');
    if (existing) existing.remove();
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    if (isVideo) {
      mediaElement.controls = true;
      mediaElement.autoplay = true;
      mediaElement.style.width = '90%';
      mediaElement.style.maxWidth = '800px';
    }
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');
    
    const content = document.createElement('div');
    content.className = 'lightbox-content';
    content.appendChild(mediaElement);
    
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(content);
    document.body.appendChild(lightbox);
    
    // Trigger animation
    setTimeout(() => {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 10);
    
    // Close handlers
    const closeModal = () => {
      lightbox.classList.remove('active');
      setTimeout(() => {
        lightbox.remove();
        document.body.style.overflow = '';
      }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeModal();
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }

  // Progress bar (top of content)
  const progBar = document.createElement('div');
  progBar.className = 'read-progress';
  progBar.style.width = '0%';
  document.querySelector('.content').appendChild(progBar);
  
  function updateProgress() {
    const el = contentArea.querySelector('.chapter-content') || contentArea;
    const scrollTop = el.scrollTop || window.pageYOffset;
    const scrollHeight = el.scrollHeight || document.documentElement.scrollHeight;
    const clientHeight = el.clientHeight || window.innerHeight;
    const maxScroll = scrollHeight - clientHeight;
    const pct = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;
    progBar.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }

  // Scroll event for progress bar
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateProgress, 10);
  }, { passive: true });

  // Theme toggle with smooth transition
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('nb-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleThemeBtn.innerHTML = '<i class="fas fa-sun"></i><span>Siang</span>';
    } else {
      toggleThemeBtn.innerHTML = '<i class="fas fa-moon"></i><span>Malam</span>';
    }
  }
  
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('nb-theme', isDark ? 'dark' : 'light');
    toggleThemeBtn.innerHTML = isDark 
      ? '<i class="fas fa-sun"></i><span>Siang</span>' 
      : '<i class="fas fa-moon"></i><span>Malam</span>';
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    toggleThemeBtn.style.position = 'relative';
    toggleThemeBtn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });

  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Font zoom with smooth transition
  zoomIn.addEventListener('click', () => {
    fontSize = Math.min(22, fontSize + 1);
    applyFont();
    addZoomFeedback(zoomIn);
  });
  
  zoomOut.addEventListener('click', () => {
    fontSize = Math.max(14, fontSize - 1);
    applyFont();
    addZoomFeedback(zoomOut);
  });
  
  function applyFont() {
    document.querySelectorAll('.chapter-content').forEach(c => {
      c.style.transition = 'font-size 0.3s ease';
      c.style.fontSize = fontSize + 'px';
    });
  }
  
  function addZoomFeedback(btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => {
      btn.style.transition = 'transform 0.2s ease';
      btn.style.transform = 'scale(1)';
    }, 100);
  }

  // Navigation buttons
  prevBtn.addEventListener('click', () => {
    if (!isTransitioning) showChapter(index - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    if (!isTransitioning) showChapter(index + 1);
  });

  // Mobile menu toggle
  toggleMenu?.addEventListener('click', () => {
    const list = document.querySelector('.chapter-list');
    list.classList.toggle('hide');
    
    // Animate menu icon
    const icon = toggleMenu.querySelector('i');
    if (list.classList.contains('hide')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // Keyboard navigation with smooth transitions
  document.addEventListener('keydown', (e) => {
    if (isTransitioning) return;
    
    if (e.key === 'ArrowRight' && !nextBtn.disabled) {
      nextBtn.click();
      addKeyboardFeedback();
    }
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
      prevBtn.click();
      addKeyboardFeedback();
    }
    if (e.key === 'Escape') {
      const lightbox = document.querySelector('.lightbox.active');
      if (lightbox) {
        lightbox.querySelector('.lightbox-close')?.click();
      }
    }
  });
  
  function addKeyboardFeedback() {
    contentArea.style.transform = 'scale(0.98)';
    setTimeout(() => {
      contentArea.style.transition = 'transform 0.2s ease';
      contentArea.style.transform = 'scale(1)';
    }, 200);
  }

  // Intersection Observer for fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe gallery items
  setTimeout(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
      observer.observe(item);
    });
  }, 1000);

  // Initialize
  buildList();
  applySavedTheme();
  showChapter(0);
  applyFont();
  
  // Add loading animation
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
});

// ====================================
// INISIALISASI UTAMA
// ====================================

function initMainApp() {
  // Kode utama yang sudah ada dimulai dari sini...
  const NOVEL = {
      title: "Bucin: Surat Cinta yang Tersimpan",
      chapters: [
          // ... data chapters yang sudah ada
      ]
  };

  // DOM Elements
  const chapterList = document.getElementById('chapter-list');
  const chapterTitle = document.getElementById('chapter-title');
  const contentArea = document.getElementById('content-area');
  const prevBtn = document.getElementById('prev-chapter');
  const nextBtn = document.getElementById('next-chapter');
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');
  const toggleMenu = document.getElementById('toggle-menu');

  // ... sisa kode utama yang sudah ada

  // Di bagian akhir, ubah inisialisasi:
  // Hapus atau komentari baris berikut:
  // window.addEventListener('load', () => { ... });
  
  // Ganti dengan:
  setTimeout(() => {
      document.body.style.opacity = '0';
      setTimeout(() => {
          document.body.style.transition = 'opacity 0.5s ease';
          document.body.style.opacity = '1';
      }, 100);
  }, 100);
}

// Panggil fungsi initMainApp setelah animasi pembukaan
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi animasi pembukaan
  initOpeningAnimation();
  
  // Tunggu sebentar sebelum inisialisasi utama
  setTimeout(() => {
      initMainApp();
  }, 500);
});
