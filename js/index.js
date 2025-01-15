const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const sign_in_btn2 = document.querySelector('#sign-in-btn2');
const sign_up_btn2 = document.querySelector('#sign-up-btn2');
const container = document.querySelector('.container');


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    console.log("add");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
    console.log("add");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    console.log("remove");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
    console.log("remove");
});

function previewImage() {
    const file = document.getElementById("image-upload").files[0];
    const preview = document.getElementById("image-preview");
    const imageIcon =  document.getElementById("profile-image-icon");
    const reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        preview.style.display = "block"; // Show the image after loading
    };

    if (file) {
        reader.readAsDataURL(file);
        imageIcon.style.setProperty("display","none");
    } else {
        imageIcon.tyle.setProperty("display","none");
        preview.style.display = "none"; // Hide the image if no file is selected
    }
}
