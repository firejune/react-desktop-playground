import BezierEasing from '../../animation/bezier-easing';

let requestAnimationFrame;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
}

const totalIterations = 95;
const circlesInterval = 14;
const restartInterval = 250;
const stopRotationAt = totalIterations * 2 / 1.02;
const easing = BezierEasing(0, 0.47, 0.9, .25);
const bounding = 68;

function rotateCircle(circles) {
  let lastFrame = false;
  for (var i = 0, len = circles.length; i < len; ++i) {
    if (this.iteration >= circlesInterval * i) {
      let iteration = this.iteration - circlesInterval * i;
      const revolution = Math.floor(iteration / totalIterations);
      iteration = iteration - (revolution * totalIterations);
      if (iteration < 0) {
        iteration = totalIterations - iteration;
      } else if (iteration > totalIterations) {
        iteration = iteration - totalIterations;
      }
      if (iteration + (revolution * totalIterations) > stopRotationAt) {
        circles[i].setAttributeNS('', 'fill-opacity', '0');
        if (i === circles.length-1) {
          lastFrame = true;
        }
      } else {
        const value = easing.get(1 / totalIterations * iteration) * 2 * Math.PI * -1;
        circles[i].setAttributeNS('', 'fill-opacity', '1');
        circles[i].setAttributeNS('', 'cx', 75 + (bounding * Math.sin(value)) + '');
        circles[i].setAttributeNS('', 'cy', 75 + (bounding * Math.cos(value)) + '');
      }
    }
  }

  this.iteration++;
  if (!lastFrame) {
    requestAnimationFrame(rotateCircle.bind(this, circles));
  } else {
    setTimeout(startAnimation.bind(null, ...circles), restartInterval);
  }
}

export function startAnimation(...elements) {
  if (requestAnimationFrame) {
    rotateCircle.apply({ iteration: 0, currentIteration: 0 }, [elements]);
  }
}
