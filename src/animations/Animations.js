import {gsap} from 'gsap'

export const basicAnimations = {
    slideUp: (element, duration = 1) => {
        const tl = gsap.timeline();
        
        // Store original position
        const originalY = element.position.y;
        
        // Set initial state
        element.position.y = originalY - 2; // Start 2 units to the left
        element.material.opacity = 0;
        
        // Animate to final state
        tl.to(element.position, { y: originalY, duration })
          .to(element.material, { opacity: 1, duration }, 0); // Start opacity animation at the same time
        
        return tl;
    },
}