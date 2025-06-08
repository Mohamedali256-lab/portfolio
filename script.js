document.addEventListener('DOMContentLoaded', function () {
  // ========== NAVBAR MOBILE ==========
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const closeBtn = document.getElementById('x');
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section[id]');

  menuToggle?.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  closeBtn?.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      menu.classList.remove('show');
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => link.classList.remove('active'));
        const currentLink = document.querySelector(`nav a[href="#${id}"]`);
        if (currentLink) {
          currentLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // ========== FILTER PORTFOLIO ==========
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        item.style.display = (filterValue === 'all' || item.getAttribute('data-category') === filterValue)
          ? 'block'
          : 'none';
      });
    });
  });

  // ========== ANIMATE SKILLS ==========
  const skillItems = document.querySelectorAll('.skill-item');

  const animateSkills = () => {
    skillItems.forEach(item => {
      const progressFill = item.querySelector('.progress-fill');
      const width = progressFill.style.width;
      progressFill.style.width = '0';
      setTimeout(() => {
        progressFill.style.width = width;
      }, 100);
    });
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const expertiseSection = document.querySelector('.expertise');
  if (expertiseSection) {
    skillObserver.observe(expertiseSection);
  }
  // ========== cards projets pour mobail ==========
  const btnCards = document.querySelectorAll(".portfolio-overlay")
  btnCards.forEach((cards =>{
    cards.addEventListener("click", ()=>{
      cards.classList.toggle("active-overlay");

    })
  }))
});

// ========== SIDEBAR PROJECT ==========
document.getElementById("buuton-page")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("sidebar-page")?.classList.add("open");
});

document.getElementById("close-sidebar")?.addEventListener("click", function () {
  document.getElementById("sidebar-page")?.classList.remove("open");
});

// ========== SECOND SIDEBAR PROJECT ==========
document.getElementById("c-projet")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("s-p")?.classList.add("op");
});

document.getElementById("clos")?.addEventListener("click", function () {
  document.getElementById("s-p")?.classList.remove("op");
});
