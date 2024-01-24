document.addEventListener("DOMContentLoaded", function () {
  const baseURL = "https://picsum.photos/367/200";
  const photoContainer = document.getElementById("photoContainer");
  const fetchButton = document.getElementById("fetch-button");
  const morephotosButton = document.getElementById("more-photos-button");
  const grayscaleSlider = document.querySelector(".switch input");

  function fetchNewPhotos(count) { // fshin fotot e containerit aktual dhe shton foto te tjera
   
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

  function appendMorePhotos(count) {//shton nje nr specifik fotosh te fotot qe jan ne photoContainer
    for (let i = 0; i < count; i++) {
      fetch(baseURL)
        .then(response => {//then eshte metod, merr nje funksion si argument
          if (!response.ok) {//kontrollon nqs response nuk eshte ok
            throw new Error(`HTTP error! Status: ${response.status}`);//nqs nuk eshte ok do bej throw nje error
          }
          return response.url;//i ben return url
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
      img.style.filter = grayscaleSlider.checked ? "grayscale(100%)" : "none";//si if ? vlereson kushtin nqs esht true fotot behen grayscale : ather del none
    });
  }

  fetchButton.addEventListener("click", function () {
    // i ben fetch fotove pa hequr egzistuset
    fetchNewPhotos(8);
  });

  morephotosButton.addEventListener("click", function () {
    // shton foto pa hequr egzistuset
    appendMorePhotos(4);
  });

  grayscaleSlider.addEventListener("change", applyGreyscale);

  fetchNewPhotos(4);
});
