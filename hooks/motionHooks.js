/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const useHeroScrollTrigger = medium => {
  const heroImageRef = useRef(null);
  const heroHeaderRef = useRef(null);
  const heroTitleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (heroImageRef.current && heroHeaderRef.current && medium) {
      // hero image
      gsap.to(heroImageRef.current, {
        height: '200px',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top top',
          end: '+=100% 200px',
          scrub: 0.5,
          pin: true
          // markers: true
        }
      });

      // hero title
      gsap.to(heroHeaderRef.current, {
        height: '300px',
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          start: 'top top',
          end: '+=100% 300px',
          scrub: 0.5,
          pin: true
          // markers: true
        }
      });

      // hero title
      gsap.to(heroTitleRef.current, {
        fontSize: '3.1rem',
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top top',
          end: '+=100% 300px',
          scrub: 0.5,
          pin: true
          // markers: true
        }
      });
    }
  }, [medium]);

  return [heroImageRef, heroHeaderRef, heroTitleRef];
};
