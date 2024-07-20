$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Comming Soon Animation

  const comingSoon = $(".coming-soon");
  SplitType.create(comingSoon);

  var tl = gsap.timeline();

  tl.set(".char", {
    yPercent: -100,
  });

  tl.to(".char", {
    yPercent: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "bounce.out",
  });
});
