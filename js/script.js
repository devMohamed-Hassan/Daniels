//console.log("script loaded!");

<!-- navbar -->

window.addEventListener("scroll", function () {
    var x = document.getElementById("navbar-id");
    var y = document.getElementById("hero").offsetHeight;
    if (window.scrollY > y) {
        x.classList.add("navbar-solid");
    } else {
        x.classList.remove("navbar-solid");
    }
});

<!-- counter -->

function counter() {
    var cnt = document.querySelectorAll('[data-count]');
    cnt.forEach(counter => {
        var x = +counter.getAttribute('data-count');
        var y = x / 100;

        function up() {
            var cur = +counter.innerText;
            if (cur < x) {
                counter.innerText = Math.ceil(cur + y);
                setTimeout(up, 20);
            } else {
                counter.innerText = x;
            }
        }

        up(); // recall
    });
}

document.addEventListener("DOMContentLoaded", counter);

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#element", {
        strings: ["LARRY Daniels", "Developer", "Designer"],
        typeSpeed: 50,
        loop: true,
    });
});


