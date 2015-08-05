/**
 * Created by Rahul_Sahay on 8/5/2015.
 */

'use strict';

describe('Rupees Filter Tests',function(){

  beforeEach(module('moviesApp'));

  // Filter name should be suffixed, when ever writing test for filters
  it('Should return 150 rs when 150 passed',inject(function(rupeesFilterFilter){
    expect(rupeesFilterFilter(150)).toEqual('150 rs');
  }));

  it('Should return 250 rs when 250 passed',inject(function(rupeesFilterFilter){
    expect(rupeesFilterFilter(250)).toEqual('250 rs');
  }));

  it('Should return 350 rs when 350 passed',inject(function(rupeesFilterFilter){
    expect(rupeesFilterFilter(350)).toEqual('350 rs');
  }));
});