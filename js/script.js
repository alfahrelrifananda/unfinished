// CHANGE BG
const imageInput = document.getElementById("imageInput");
const mainContent = document.getElementById("mainContent");

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            mainContent.style.backgroundImage = `url('${e.target.result}')`;
            mainContent.style.backgroundSize = "cover";
            mainContent.style.backgroundPosition = "center";
        };
        reader.readAsDataURL(file);
    }
});

document.querySelector('label[for="imageInput"]').addEventListener("click", () => {
    imageInput.value = null;
});