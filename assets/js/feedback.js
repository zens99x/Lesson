const active = document.querySelector.bind(document);
const dot = document.querySelectorAll(".dot");

// Gắn sự kiện click
dot.forEach((tab, index) => {
    tab.onclick = function () {
        active(".dot.active").classList.remove("active");
        this.classList.add("active");
    };
});
