/* eslint-disable no-console */
const { hampelFilter, identifyOutliers } = require('../lib');

const data = [1, 2, 1, 1, 40, 2, 1, 1, 30, 40, 1, 1, 2, 1];

const filteredData = hampelFilter(data, { windowHalfWidth: 3 });
const outliers = identifyOutliers(data, { windowHalfWidth: 3 });


console.log('Initial data:', data);
// filteredData = [1, 2, 1, 1, 1.5, 1, 1, 1, 1, 1, 1, 1, 2, 1]
console.log('Filtered data:', filteredData);
// outliers = [4, 5, 8, 9]
console.log('Identified outliers:', outliers);
