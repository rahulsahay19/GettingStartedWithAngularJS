/**
 * Created by Rahul_Sahay on 8/2/2015.
 */

'use strict';

describe('cacheFactoryServiceTest', function () {

  beforeEach(module('moviesApp'));

  it('Should put value in cache factory', inject(function (cacheFactory) {
    expect(cacheFactory.put('1', 'Jurassic World')).toBe('Jurassic World');
  }));

  it('Should remove value from cache factory', inject(function (cacheFactory) {
    expect(cacheFactory.remove('1'));
  }));
});