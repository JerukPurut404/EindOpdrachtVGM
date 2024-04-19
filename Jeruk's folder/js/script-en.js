class App {
    constructor() {
      this.NavLinks = document.getElementById("NavLinks");
      this.imageContainer = document.getElementsByClassName("slideshow-container")[0];
      this.images = this.imageContainer.querySelectorAll('img');
      this.imageDescriptions = ['We have moterbikes where you and your friends can compete against each other',' Also a fun air hockey game for 2 players where you can play against your friends and see who is better', ' We have many fun games and many with 2 players!!!', 'Here is an extra to the air hockey because its so popular!', 'We also have shooting games that you can play alone or with your friends, it seems like its happening before your eyes how bizarre?!?'];
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