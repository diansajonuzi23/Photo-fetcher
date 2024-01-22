document.addEventListener("DOMContentLoaded", function () {
  const baseURL = "https://picsum.photos/300/200";
  const photoContainer = document.getElementById("photoContainer");
  const fetchButton = document.getElementById("fetch-button");
  const morephotosButton = document.getElementById("more-photos-button");
  const grayscaleSlider = document.querySelector(".switch input");

  function fetchNewPhotos(count) {
    
    photoContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      fetch(baseURL)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.url;
        })
        .then(imageUrl => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.className = "photo";
          photoContainer.appendChild(imageElement);
        })
        .catch(error => {
          console.error("Error fetching image:", error);
        });
    }
  }

  function appendMorePhotos(count) {
    for (let i = 0; i < count; i++) {
      fetch(baseURL)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.url;
        })
        .then(imageUrl => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.className = "photo";
          photoContainer.appendChild(imageElement);
        })
        .catch(error => {
          console.error("Error fetching image:", error);
        });
    }
  }

  function applyGreyscale() {
    const images = document.querySelectorAll("#photoContainer img");
    images.forEach(img => {
      img.style.filter = grayscaleSlider.checked ? "grayscale(100%)" : "none";
    });
  }

  fetchButton.addEventListener("click", function () {
  
    fetchNewPhotos(4);
  });

  morephotosButton.addEventListener("click", function () {
    
    appendMorePhotos(4);
  });

  grayscaleSlider.addEventListener("change", applyGreyscale);

 
  fetchNewPhotos(4);
});
