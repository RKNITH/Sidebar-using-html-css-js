const slide = document.getElementById('slide');
const sidebarBtn = document.getElementById('sidebarBtn');
const cross = document.getElementById('cross');
slide.onclick = function () {
    sidebarBtn.style.transform = "translateX(0)";
    cross.style.display = "block";
}
cross.onclick = function () {
    sidebarBtn.style.transform = "translateX(-100%)";
}

