# Hampel filter

[![Build Status](https://travis-ci.org/rnd-student-lab/hampel-filter.svg?branch=master)](https://travis-ci.org/rnd-student-lab/hampel-filter) 
[![dependencies Status](https://david-dm.org/rnd-student-lab/hampel-filter/status.svg)](https://david-dm.org/rnd-student-lab/hampel-filter) 
[![devDependencies Status](https://david-dm.org/rnd-student-lab/hampel-filter/dev-status.svg)](https://david-dm.org/rnd-student-lab/hampel-filter?type=dev) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Hampel filter implementation for removing outliers from time series data.

For Hampel filter details see: 

* Pearson, R.K., Neuvo, Y., Astola, J. and Gabbouj, M., 2016. Generalized hampel filters. EURASIP Journal on Advances in Signal Processing, 2016(1), pp.1-18, [10.1186/s13634-016-0383-6](https://doi.org/10.1186/s13634-016-0383-6).
* https://dsp.stackexchange.com/questions/26552/what-is-a-hampel-filter-and-how-does-it-work


## API

### hampelFilter(timeseriesData[, options])

#### `timeseriesData`

Time series data must be an array of numbers. For example:

```js
[1, 2, 1, 1, 40, 2, 1, 1, 30, 40, 1, 1, 2, 1]
```

#### `options`

If you don't provide an `options` object then the following defaults will be used:

```js
{
  windowHalfWidth: 5,
  threshold: 3,
  constantScaleFactor: 1.4826,
}
```

### identifyOutliers(timeseriesData[, options])

#### `timeseriesData`

Time series data must be an array of numbers. For example:

```js
[1, 2, 1, 1, 40, 2, 1, 1, 30, 40, 1, 1, 2, 1]
```

#### `options`

If you don't provide an `options` object then the following defaults will be used:

```js
{
  windowHalfWidth: 5,
  threshold: 3,
  constantScaleFactor: 1.4826,
}
```


## Installation

Using npm:

```shell
npm i -s hampel-filter
```


## Usage

In Node.js

```js
const { hampelFilter, identifyOutliers } = require('hampel-filter');

const data = [1, 2, 1, 1, 40, 2, 1, 1, 30, 40, 1, 1, 2, 1];

const filteredData = hampelFilter(data, { windowHalfWidth: 3 });
const outliers = identifyOutliers(data, { windowHalfWidth: 3 });


console.log('Initial data:', data);
// filteredData = [1, 2, 1, 1, 1.5, 1, 1, 1, 1, 1, 1, 1, 2, 1]
console.log('Filtered data:', filteredData);
// outliers = [4, 5, 8, 9]
console.log('Identified outliers:', outliers);
```


## License

MIT © Dmitry Ilin
