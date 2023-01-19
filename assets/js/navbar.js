const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy tabs
const tabs = $$(".tab-item");

// Gắn sự kiện click
tabs.forEach((tab, index) => {
    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        this.classList.add("active");
    };
});
