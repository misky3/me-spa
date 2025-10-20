const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 }); 

faders.forEach(el => observer.observe(el));

const mainPhoto = document.getElementById('main-photo');
const thumbnails = document.querySelectorAll('.thumbnails img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let intervalTime = 3000; 

function changePhoto(index) {
  const thumb = thumbnails[index];
  mainPhoto.style.opacity = 0;

  setTimeout(() => {
    mainPhoto.src = thumb.src.replace('/100/70', '/600/400');
    mainPhoto.style.opacity = 1;
  }, 300);

  thumbnails.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    changePhoto(currentIndex);
    resetAutoSlide(); 
  });
});


function startAutoSlide() {
  return setInterval(() => {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
      currentIndex = 0; 
    }
    changePhoto(currentIndex);
  }, intervalTime);
}

let slideInterval = startAutoSlide();
function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = startAutoSlide();
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  changePhoto(currentIndex);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  changePhoto(currentIndex);
  resetAutoSlide();
});
