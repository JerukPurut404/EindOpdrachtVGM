console.log("Logged")
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
console.log(images);
  // Set first image to visible
  images[current].classList.remove('hidden');
  console.log(current, images[current].classList)

  // Add event listener for next button
  document.getElementById('next').addEventListener('click', 
  function() {
    // Hide current image
  console.log(current, images[current].classList)
    images[current].classList.add('hidden');
  console.log(current, images[current].classList)

    // Increment current image
   // current = (current + 1) % images.length;
    current++;
    if(current >= images.length)
    {
      current=0;
    }

    // Show new image
  console.log(current, images[current].classList)
    images[current].classList.remove('hidden');
  console.log(current, images[current].classList)
  });

  // Add event listener for previous button
  document.getElementById('prev').addEventListener('click', function() {
    // Hide current image
    images[current].classList.add('hidden');

    // Decrement current image
    current = (current + images.length - 1) % images.length;

    // Show new image
    images[current].classList.remove('hidden');
  });