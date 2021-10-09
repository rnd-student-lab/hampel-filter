import { expect } from 'chai';
import { hampelFilter, identifyOutliers } from '../src';

const data = [1, 2, 1, 1, 40, 2, 1, 1, 30, 40, 1, 1, 2, 1];

describe('Hampel filter test suite.', () => {
  it('should test hampel filter function', () => {
    const reference3 = [1, 2, 1, 1, 1.5, 1, 1, 1, 1, 1, 1, 1, 2, 1];
    const reference5 = [1, 2, 1, 1, 40, 2, 1, 1, 1.5, 40, 1, 1, 2, 1];

    expect(hampelFilter(data, { windowHalfWidth: 3 })).to.be.deep.equal(reference3);
    expect(hampelFilter(data, { threshold: 3 })).to.be.deep.equal(reference5);
    expect(hampelFilter(data, { constantScaleFactor: 1.4826 })).to.be.deep.equal(reference5);
    expect(hampelFilter(data)).to.be.deep.equal(reference5);
  });

  it('should test outlier identification function', () => {
    const reference3 = [4, 5, 8, 9];
    const reference5 = [8];

    expect(identifyOutliers(data, { windowHalfWidth: 3 })).to.be.deep.equal(reference3);
    expect(identifyOutliers(data, { threshold: 3 })).to.be.deep.equal(reference5);
    expect(identifyOutliers(data, { constantScaleFactor: 1.4826 })).to.be.deep.equal(reference5);
    expect(identifyOutliers(data)).to.be.deep.equal(reference5);
  });
});
