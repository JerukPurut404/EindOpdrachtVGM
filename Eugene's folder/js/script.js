class App {
  constructor() {
    this.NavLinks = document.getElementById("NavLinks");
    this.imageContainer = document.getElementsByClassName("slideshow-container")[0];
    this.images = this.imageContainer.querySelectorAll('img');
    this.imageDescriptions = ['Wij hebben ook nog schietspellen die je alleen of met je vrienden kan spelen, het lijkt net alsof het voor je ogen gebeurt hoe bizar?!?', 'Hierbij nog een extra bij de air hockey doordmiddel dat het zo populair is!', 'We hebben veel leuke games en veel met 2 players!!!', 'Ook nog een leuke air hockey spel voor 2 spelers waarbij je tegen je vrienden kan spelen en zien wie beter is', 'Hierbij hebben wij moterbikes waarbij jij en je vrienden samen tegen elkaar kunnen gaan strijden '];
    this.imageSubtext = document.querySelector('.image-subtext');
    this.current = 0;
    this.loaderContainer = document.querySelector('.loader-container');
    this.init();
  }

  init() {
    this.images[this.current].classList.remove('hidden');
    document.getElementById('next').addEventListener('click', this.nextImage.bind(this));
    document.getElementById('prev').addEventListener('click', this.prevImage.bind(this));
    cheet("↑ ↑ ↓ ↓ ← → ← → b a", this.easterEgg.bind(this));
    window.addEventListener('load', this.fadeOutLoader.bind(this));
  }

  facebook() {
    window.open("http://www.facebook.com/nationaalgamemuseum");
  }

  instagram() {
    window.open("https://instagram.com/NVGMuseum");
  }

  twitter() {
    window.open("https://twitter.com/NaVGMuseum");
  }

  youtube() {
    window.open("https://www.youtube.com/channel/UCnNuMO-7-TVI5ZEZwzU14Ew/featured?view_as=subscriber");
  }

  UnloadNL(){
    window.location.replace("index.html");
  }

  UnloadEN(){
    window.location.replace("english.html");
  }

  showMenu() {
    this.NavLinks.style.right = "0";
    console.log("Show Menu");
  }

  hideMenu() {
    this.NavLinks.style.right = "-200px";
    console.log("Hide Menu");
  }

  easterEgg() {
    alert("Congratulations, You found our easter egg");
    window.open("easteregg.html");
  }

  nextImage() {
    this.images[this.current].classList.add('hidden');
    this.current++;
    if(this.current >= this.images.length) {
      this.current = 0;
    }
    this.images[this.current].classList.remove('hidden');
    this.imageSubtext.innerText = this.imageDescriptions[this.current];
  }

  prevImage() {
    this.images[this.current].classList.add('hidden');
    this.current = (this.current + this.images.length - 1) % this.images.length;
    this.images[this.current].classList.remove('hidden');
    this.imageSubtext.innerText = this.imageDescriptions[this.current];
  }

  fadeOutLoader() {
    this.loaderContainer.classList.add('fade-out');
    this.loaderContainer.addEventListener('transitionend', () => {
      this.loaderContainer.style.display = 'none';
    });
  }
}

const app = new App();