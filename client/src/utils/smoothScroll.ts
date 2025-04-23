/**
 * Performs a smooth scroll to a specific position or element on the page
 * @param to - Target Y position or element selector
 * @param duration - Duration of the scroll animation in milliseconds
 */
export function smoothScrollTo(to: number | string, duration: number = 800): void {
  // If target is a selector string, find the element's position
  let targetPosition: number;
  if (typeof to === 'string') {
    const targetElement = document.querySelector(to);
    
    if (!targetElement) {
      console.warn(`Element with selector "${to}" not found`);
      return;
    }
    
    targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  } else {
    targetPosition = to;
  }
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  
  // Easing function: easeInOutCubic
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 
      ? 4 * t * t * t 
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  };
  
  window.requestAnimationFrame(animation);
}

/**
 * Performs a smooth scroll to a specific element by its ID
 * @param elementId - ID of the target element (without the # prefix)
 * @param duration - Duration of the scroll animation in milliseconds
 * @param offset - Offset in pixels from the top of the element (useful for fixed headers)
 */
export function smoothScrollToElement(elementId: string, duration: number = 800, offset: number = 0): void {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  smoothScrollTo(elementPosition - offset, duration);
}

/**
 * Smooth scroll to the top of the page
 * @param duration - Duration of the scroll animation in milliseconds
 */
export function smoothScrollToTop(duration: number = 800): void {
  const scrollToTopSmooth = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTopSmooth);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  };
  
  try {
    // Try using requestAnimationFrame for smoother scrolling
    scrollToTopSmooth();
  } catch (e) {
    // Fallback to using the general smooth scroll function
    smoothScrollTo(0, duration);
  }
}