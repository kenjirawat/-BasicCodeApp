describe('Testing like button', function () {
    it('should toggle', function () {
        browser.get('http://127.0.0.1:8080')
        expect(element(by.css('button#like')).getText()).toEqual('like')
        element(by.css('button#like')).click()
        expect(element(by.css('button#like')).getText()).toEqual('unlike')
   /*   element(by.css('button#like')).click()
        expect(element(by.css('button#like')).getText()).toEqual('like')
        element(by.css('button#like')).click()
        element(by.css('button#like')).click()
        expect(element(by.css('button#like')).getText()).toEqual('like')
    */
    })
})