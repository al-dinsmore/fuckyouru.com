document.getElementById("fuck-button").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.remove("hidden");

  gsap.fromTo("#message", 
    { scale: 0, opacity: 0 },
    { scale: 1.5, opacity: 1, duration: 1, ease: "bounce.out" }
  );

  gsap.to("#fuck-button", {
    rotation: 360,
    scale: 0,
    duration: 0.7,
    ease: "power2.in"
  });
});

