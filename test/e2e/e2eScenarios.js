/**
 * Created by Rahul_Sahay on 8/21/2015.
 */


describe('Movie Review App',function(){

  describe('movies',function() {

    beforeEach(function () {
      browser().navigateTo('/MovieDetails')
    });

    it('Should Display Home Page',function(){
      expect(element('h1:first').text()).toContain('Getting Started');
    });

    it('Should Display Paragraph',function(){
      expect(element('p:first').text()).toContain('Learn Live with examples');
    });
  });
})