export const htmlCodeConstant = `<header id="hero">
<nav class="navbar">
  <div class="container">
    <span id="logo">
      <a href="#" >Website Title</a>
    </span>
    <ul class="nav-menu">
      <li><a class="nav-link" href="#about">소개</a></li>
      <li><a class="nav-link" href="#interests">취미</a></li>
      <li><a class="nav-link" href="#memory">추억</a></li>
      <li>
        <a class="nav-link btn btn-primary" href="#contact"
          >연락하기 <i class="fas fa-arrow-right"></i
        ></a>
      </li>
    </ul>
    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
</nav>

<section class="header-container">
  <img
    class="profile-image"
    src="https://assets.codefriends.net/assets/images/bio-website/hero-image.png"
    alt="hero-image"
  />
  <h1 class="intro">안녕하세요!</h1>

  <div class="content-text">
    <h2>{Name} 입니다</h2>
    <p>방문해 주셔서 감사합니다 🙂</p>
  </div>

  <a
    href="https://www.instagram.com/codefriends.korea/"
    class="social-media"
    target="_blank"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-instagram"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
      />
    </svg>
  </a>
</section>
</header>

<div class="division"></div>

<section id="about" class="container">
<div class="content-text">
  <h2>소개</h2>
  <p>저를 간단히 소개하겠습니다!</p>
</div>

<div class="bio-container">
  <div class="bio-item">
    <h4>생년월일</h4>
    <p class="bio-text">2000.01.01</p>
  </div>

  <div class="bio-item">
    <h4>MBTI</h4>
    <p class="bio-text">ENTJ</p>
  </div>

  <div class="bio-item">
    <h4>사는 곳</h4>
    <p class="bio-text">서울</p>
  </div>
</div>
</section>

<div class="division"></div>

<section id="interests" class="container">
<div class="content-text">
  <h2>취미</h2>
  <p>사진과 영상을 확인해 보세요 📹</p>
</div>

<div class="grid">
  <div onclick="gridImageClick(this)">
    <img
      src="https://assets.codefriends.net/assets/images/bio-website/gallery-1.jpeg"
      width="100%"
      height="100%"
      alt="설명 1"
      class="grid-image"
    />
  </div>
  <div onclick="gridImageClick(this)">
    <img
      src="https://assets.codefriends.net/assets/images/bio-website/gallery-2.jpeg"
      width="100%"
      height="100%"
      alt="설명 2"
      class="grid-image"
    />
  </div>
  <video
    src="https://assets.codefriends.net/assets/images/bio-website/gallery-3.mp4"
    class="grid-video"
    width="100%"
    height="100%"
    controls
  >
    Video
  </video>
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/Bc7OWMcA54A"
    title="iframe example"
    allow="fullscreen;"
    >Iframe
  </iframe>
</div>
</section>
`;
export const cssCodeConstant = `html {
  font-size: 100%;
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

body {
  background: white;
  color: black;
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
}

.content-text {
  text-align: center;
  margin-bottom: 24px;
  /* color: blue;  */
} /*  윗 줄에서 color:blue 양 옆의 /* 를 제거하면, 텍스트가 파란색으로 바뀌어요  */

.content-text p {
  padding: 8px;
  margin: 0 auto;
  max-width: 700px;
}

.box {
  margin-top: 10px;
  padding-bottom: 20px;
  margin-left: 10%;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 12px;
  transition: 0.3s;
}

.btn-primary {
  background: #ffcd42;
  color: #000000;
}

.container {
  max-width: var(--width-medium);
  margin: 0 auto;
  padding: 24px;
  scroll-margin-top: 80px;
}

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 128px;
  padding: 24px;
}

.header-container > div {
  margin-top: 16px;
}

.bio-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 680px;
  margin: auto;
  flex-wrap: wrap;
  padding-top: 24px;
  gap: 16px;
}

.bio-item {
  text-align: center;
  width: 80px;
}

.bio-text {
  color: grey;
  margin-top: 8px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: white;
  box-shadow: 0px 0px 8px #eeeeee;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height: 60px;
  width: 100%;
}

.navbar .nav-menu {
  display: flex;
  align-items: center;
  background: white;
}

.navbar .nav-link {
  margin: 0 16px;
  font-size: 14px;
  font-weight: var(--weight-semibold);
}

.navbar #logo img {
  display: block;
  width: 40px;
}

.navbar .btn {
  margin-right: 8px;
}

.fas.fa-arrow-right {
  margin-left: 8px;
  font-size: 14px;
}

.division {
  width: 100%;
  height: 2px;
  background-color: #f4f4f4;
  margin: 20px 0;
}

#hero {
  display: flex;
  flex-direction: column;
}

.profile-image {
  width: 150px;
  border-radius: 50%;
  animation: bounce 1s infinite alternate;
}

.intro {
  margin-top: 24px;
  font-weight: normal;
  font-size: 24px;
  color: grey;
  margin-bottom: 16px;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-10px);
  }
}

.grid {
  display: grid;
  max-width: 1000px;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(280px, auto);
  grid-gap: 14px;
}

.grid-item {
  background: #f4f4f4;
  color: white;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
}

.grid-info {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: 0.5s ease-in-out;
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.grid-image {
  cursor: pointer;
}

.grid-video {
  object-fit: cover;
}

.grid-item:hover .grid-info {
  opacity: 0.7;
}

.slideshow-container {
  padding-top: 24px;
  max-width: 600px;
  position: relative;
  margin: auto;
}

.slide-image {
  width: 100%;
  height: 320px;
}

.my-slides {
  display: none;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* Carousel */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  border-radius: 4px;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.slide-text {
  color: black;
  font-size: 16px;
  position: absolute;
  bottom: -24px;
  width: 100%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 12px 4px 0;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot:hover,
.dot.active {
  background-color: #717171;
}

/* Footer */
#footer {
  margin-top: 50px;
  background: #111111;
  padding-block: 16px;
}

#footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

#footer a {
  font-size: 14px;
  color: #fff;
}

#footer a:hover {
  opacity: 0.6;
}

#footer .social {
  margin-top: 16px;
}

#footer .social img {
  width: 20px;
  height: 20px;
}

#footer .social a {
  margin: 0 8px;
}

#footer p {
  font-size: 14px;
}

.social-media {
  width: 40px;
  height: 40px;
  background: khaki;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.attribution {
  color: white;
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
}

.attribution a {
  text-decoration: underline;
  font-size: 12px;
}

#modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content */
.modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  margin: auto;
  padding: 32px 16px 16px 18px;
  width: 95%;
  position: relative;
  max-width: 500px;
  border-radius: 8px;
}

#modal-text {
  text-align: center;
}

/* Modal close button */
.modal-close {
  color: #aaaaaa;
  position: absolute;
  font-size: 32px;
  font-weight: bold;
  right: 6px;
  top: -10px;
}

.modal-close:hover,
.modal-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 24px;
  height: 4px;
  margin: 4px auto;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
  background-color: black;
}

/* Responsiveness */
@media (max-width: 1000px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 670px) {
  .navbar .nav-menu {
    position: fixed;
    right: -100vw;
    top: 72px;
    flex-direction: column;
    width: calc(80% - 10px);
    transition: 0.3s;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    padding: 32px;
    border-radius: 5px;
    align-items: flex-start;
  }

  .navbar .btn {
    margin: 0;
    margin-top: 16px;
  }

  .nav-menu.active {
    right: 20px;
  }

  .nav-menu .nav-link {
    font-size: 14px;
    margin: 0 4px;
  }

  .nav-menu li {
    margin-bottom: 8px;
    width: 100%;
  }

  .nav-menu .btn {
    width: 100%;
    text-align: center;
    margin-top: 8px;
  }

  .hamburger {
    display: block;
    cursor: pointer;
    padding: 4px 8px;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@media (max-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .header-container .btn {
    border-radius: 5px;
    width: 80%;
  }
}

@media (max-width: 768px) {
  .header-container {
    margin-top: 112px;
    text-align: center;
  }
}
`;
export const jsCodeConstant = `const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

document.querySelectorAll(".grid-image").forEach(function (el) {
  el.addEventListener("click", (e) => {
    const gridImage = e.target;
    const gridImageInString = gridImage.outerHTML;
    const alt = gridImage.alt;

    const modalImage = document.getElementById("modal-image");
    const modalText = document.getElementById("modal-text");

    modalImage.innerHTML = gridImageInString;
    modalText.innerHTML = alt;
  });
});

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Get the modal
const modal = document.getElementById("modal");

const modalClose = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal
function gridImageClick() {
  modal.style.display = "block";
}

modalClose.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
`;
