document.addEventListener("DOMContentLoaded", () => {

    const heart = document.getElementById("heart");
    const names = document.querySelectorAll(".name");

    heart.addEventListener("click", () => {
        names.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateX(-50%) translateY(0)";
            }, index * 700);
        });
    });

});
