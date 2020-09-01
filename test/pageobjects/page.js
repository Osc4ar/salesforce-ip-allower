/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    jsFunction(action) {
        
    }

    jsClick(element) {
        element.waitForExist();
        browser.execute((e) => {
            e.click();
        }, element);
    }

    jsFocus(element) {
        element.waitForExist();
        browser.execute((e) => {
            e.focus();
        }, element);
    }

    open (path) {
        return browser.url(`${process.env.SF_URL}/${path}`)
    }
}
