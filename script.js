const carousel = document.getElementById("carousel");
let currentIndex = 0;
let autoScrollInterval;

function updateCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
}

function startAutoScroll() {
  autoScrollInterval = setInterval(nextSlide, 3000); // Change the interval as needed (in milliseconds)
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  stopAutoScroll();
  nextSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  stopAutoScroll();
  prevSlide();
});

carousel.addEventListener("mouseenter", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);

startAutoScroll(); // Start auto-scrolling initially

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

fetch("data/catagory.json") // Replace with the correct file path or URL
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Display the JSON data for the first four categories
    const catagoryContainer = document.getElementById("catagoryContainer");

    // Loop through the first four categories
    for (let i = 0; i < 4 && i < data.length; i++) {
      const product = data[i];
      catagoryContainer.innerHTML += `
        <div>
          <div id=${product.id}>
            <img src="${product.img}" alt="" srcset="">
            <div>
              <label for="">${product.title}</label>
              <button>View Category</button>
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });


fetch("data/slider.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const sliderContainer = document.getElementById("carousel");

    data.forEach((product) => {
      sliderContainer.innerHTML += `
  
  <div class="carousel-item">
          <img src="${product.img}" alt="${product.id}">
        </div>
   `;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });


  document.addEventListener('DOMContentLoaded', function () {
    const label = document.getElementById('proTtl');

    if (label) {
        const originalText = label.innerText.trim();
        truncateLabel(label, 5);

        // Set the full title as the tooltip
        label.title = originalText;
    }
});

function truncateLabel(label, words) {
    const text = label.innerText.trim();
    const truncatedText = text.split(' ').slice(0, words).join(' ');
    label.innerText = truncatedText + '...';
}


fetch("https://fakestoreapi.com/products") // Replace with the correct file path or URL
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Display the JSON data in cards
    const productsContainer = document.getElementById("ltstProduct");

    for (let i = 0; i < 8 && i < data.length; i++) {
      const product = data[i];
      productsContainer.innerHTML += `<div class="productCard">
      <div class="cardimg">
        <img class="img" src="${product.image}" alt="" srcset="">
      </div>
      <div class="carddetails">
        <label for="" class="proTtl" id="proTtl" title="${product.title}">${product.title}</label>
        <label for="" class="proCat">${product.category}</label>
        <label for="" class="proPrice">$ ${product.price}</label>
        <div>
          <label for="" class="proRate">Rating : ${product.rating.rate}</label>
          <label for="">|</label>
          <label for="" class="proCount">Review : ${product.rating.count}</label>
        </div>
      </div>
    </div>
       `;
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });


  fetch("data/features.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const featuresContainer = document.getElementById("featuresContaint");

    // Display only the first 8 products
    for (let i = 0; i < 3 && i < data.length; i++) {
      const product = data[i];

      featuresContainer.innerHTML += `
      <div class="fCard">
      <div class="ficon">
        <img src="${product.logo}" alt="${product.id}">
      </div>
      <div class="fdetails">
        <h2>${product.title}</h2>
        <label for="">
          ${product.description}
        </label>
      </div>
    </div>
      `;
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });