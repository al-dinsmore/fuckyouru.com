const jaw = document.getElementById("head-bottom");
let count = 0;
let flap;

function flapJaw() {
  gsap.to(jaw, {
    rotation: 15,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });
}

setInterval(flapJaw, 300)
//flap = setInterval(() => {
//  flapJaw();
//  count++;
//  if (count > 10) clearInterval(flap);
//}, 300);

