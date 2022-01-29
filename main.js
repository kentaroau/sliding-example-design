function moveSlider() {
    let slideTwo = document.querySelector(".slide__two");
    let slider = document.getElementById("slider");

    slideTwo.style.width = slider.value + "%";
}

(function () {

    moveSlider();

    gsap.from(".hero__heading", {
        x: -150,
        opacity: 0,
        stagger: 0.2 // 0.1 seconds between when each ".box" element starts animating
    });

    gsap.from(".heroinfo__panel", {
        y: 150,
        delay: 1,
        opacity: 0,
        stagger: 0.2 // 0.1 seconds between when each ".box" element starts animating
    });


    gsap.from(".hero-bg", {
        delay: 0.5,
        opacity: 0,
    });

})();