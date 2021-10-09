import { median, mad, abs } from 'mathjs';

const defaults = {
  windowHalfWidth: 5,
  threshold: 3,
  constantScaleFactor: 1.4826,
};

const isOutlier = (element, window, threshold, constantScaleFactor) => (
  (abs(element - median(window)) / (constantScaleFactor * mad(window))) > threshold
);

function hampelFilter(timeseriesData, {
  windowHalfWidth = defaults.windowHalfWidth,
  threshold = defaults.threshold,
  constantScaleFactor = defaults.constantScaleFactor,
} = defaults) {
  const data = [...timeseriesData];
  const n = data.length;

  for (let i = windowHalfWidth + 1; i < n - windowHalfWidth; i += 1) {
    const window = data.slice(i - windowHalfWidth, i + windowHalfWidth);
    if (isOutlier(data[i], window, threshold, constantScaleFactor)) {
      data[i] = median(window);
    }
  }

  return data;
}

function identifyOutliers(timeseriesData, {
  windowHalfWidth = defaults.windowHalfWidth,
  threshold = defaults.threshold,
  constantScaleFactor = defaults.constantScaleFactor,
} = {}) {
  const data = [...timeseriesData];
  const n = data.length;
  const indices = [];

  for (let i = windowHalfWidth + 1; i < n - windowHalfWidth; i += 1) {
    const window = data.slice(i - windowHalfWidth, i + windowHalfWidth);
    if (isOutlier(data[i], window, threshold, constantScaleFactor)) {
      data[i] = median(window);
      indices.push(i);
    }
  }

  return indices;
}

export default hampelFilter;
export { hampelFilter, identifyOutliers };
