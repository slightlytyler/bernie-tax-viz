/* eslint-disable */
export default function scrollTo(elementId) {
  const MIN_PIXELS_PER_STEP = 70;
  const MAX_SCROLL_STEPS = 100;

  let target = document.getElementById(elementId);
  let scrollContainer = target;

  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop === 0);

  let targetY = 0;

  do {
    if (target === scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent); // eslint-disable-line

  const pixelsPerStep = Math.max(
    MIN_PIXELS_PER_STEP,
    (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS
  );

  const stepFunc = () => {
    scrollContainer.scrollTop = Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

    if (scrollContainer.scrollTop >= targetY) {
      return;
    }

    window.requestAnimationFrame(stepFunc);
  };

  window.requestAnimationFrame(stepFunc);
}

/* eslint-enable */
