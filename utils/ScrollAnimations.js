import { useEffect } from "react";
import { Controller } from "scrollmagic";
import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";

const ScrollAnimations = () => {
  useEffect(() => {
    // Initialize ScrollMagic controller
    const controller = new Controller();

    // Create a new scene
    new ScrollMagic.Scene({
      triggerElement: ".your-trigger-element",
      triggerHook: 0.8, // Adjust as needed
      reverse: false, // Change to 'true' if you want the animation to reverse on scroll up
    })
      .on("enter", () => {
        // Define your animation using GSAP
        TweenMax.from(".your-animated-element", 1, { opacity: 0, y: 50 });
      })
      .addTo(controller);
  }, []);

  return null;
};

export default ScrollAnimations;
