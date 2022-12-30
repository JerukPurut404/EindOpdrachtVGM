function facebook() {
    window.open("http://www.facebook.com/nationaalgamemuseum");
  }
  function instagram() {
    window.open("https://instagram.com/NVGMuseum");
  }
  function twitter() {
    window.open("https://twitter.com/NaVGMuseum");
  }
  function youtube() {
    window.open(
      "https://www.youtube.com/channel/UCnNuMO-7-TVI5ZEZwzU14Ew/featured?view_as=subscriber"
    );
  }
function UnloadNL(){
  window.location.replace("index.html");
}
function UnloadEN(){
  window.location.replace("english.html")
}
  let NavLinks = document.getElementById("NavLinks");
  function showMenu() {
    NavLinks.style.right = "0";
    console.log("Show Menu");
  }
  function hideMenu() {
    NavLinks.style.right = "-200px";
    console.log("Hide Menu");
  }
  cheet("↑ ↑ ↓ ↓ ← → ← → b a", function () {
    window.open("easteregg.html");
  });
  let imageContainer = document.getElementsByClassName("slideshow-container")[0];
  let images = imageContainer.querySelectorAll('img');
  let current = 0;
  images[current].classList.remove('hidden');
  document.getElementById('next').addEventListener('click', 
  function() {
    images[current].classList.add('hidden');
    current++;
    if(current >= images.length)
    {
      current=0;
    }
    images[current].classList.remove('hidden');
  });
  document.getElementById('prev').addEventListener('click', function() {
    images[current].classList.add('hidden');
    current = (current + images.length - 1) % images.length;
    images[current].classList.remove('hidden');
  });