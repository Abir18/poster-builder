// Get elements
const headingInput = document.getElementById("heading");
const imageInput = document.getElementById("image");
const descriptionInput = document.getElementById("description");
const previewHeading = document.getElementById("previewHeading");
const previewImage = document.getElementById("previewImage");
const previewDescription = document.getElementById("previewDescription");
const downloadBtn = document.getElementById("downloadBtn");

// Event listeners
headingInput.addEventListener("input", updatePreview);
imageInput.addEventListener("change", updatePreview);
descriptionInput.addEventListener("input", updatePreview);
downloadBtn.addEventListener("click", downloadPoster);

// Function to update the poster preview
function updatePreview() {
  previewHeading.innerText = headingInput.value;
  previewImage.src = URL.createObjectURL(imageInput.files[0]);
  previewDescription.innerText = descriptionInput.value;
}

// Function to download the poster as an image
function downloadPoster() {
  const posterContainer = document.getElementById("preview");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = posterContainer.offsetWidth;
  canvas.height = posterContainer.offsetHeight;

  // Draw poster on the canvas
  html2canvas(posterContainer).then(function (canvas) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = image;
    link.click();
  });
}
