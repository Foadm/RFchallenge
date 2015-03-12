describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8080/#/');
        expect(browser.getTitle()).toEqual('RF Challenge');
        element(by.model('street')).sendKeys("634 NW Flanders ST");
        element(by.model('city')).sendKeys("Portland");
        element(by.model('state')).sendKeys("Oregon");
        element(by.model('startdt')).clear().then(function(){
            element(by.model('startdt')).sendKeys('2015-02-01');
        });
        element(by.model('enddt')).sendKeys('2015-02-04');
        element(by.id('submit-btn')).click();
    });
    it('should test and see if the data is populated in the table on home page', function(){
        //expect(element(by.id('main-table')).isPresent()).toBe(true);
        browser.wait(function(){
            return element(by.id('data-row')).isPresent();
        });
    });
    it('should click on a date and change route and populate the next table', function(){

        element.all(by.model('dates')).get(1).click();
        //expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/' + itemId);
    });
});