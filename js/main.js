const heart = document.getElementById("heart");
const names = document.querySelectorAll(".name");

heart.addEventListener("click", () => {
    names.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 700);
    });
});
