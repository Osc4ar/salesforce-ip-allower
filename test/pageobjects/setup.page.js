const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SetupPage extends Page {

    get iframeNetworkAccess() { return $('//iframe[@title="Network Access ~ Salesforce - Unlimited Edition"]') }
    get btnNew() { return $('//input[@name="new"]') }

    get iframeTrustedIPs() { return $('//iframe[@title="Network Access: Trusted IP Range Edit ~ Salesforce - Unlimited Edition"]') }
    get inpStartAddr() { return $('#IpStartAddress') }
    get inpEndAddr() { return $('#IpEndAddress') }
    get btnSave() { return $('//input[@name="save"]') }

    whiteListNewAddress(start, end) {
        this.iframeNetworkAccess.waitForExist({timeout: 10000});
        browser.switchToFrame(this.iframeNetworkAccess);
        this.jsClick(this.btnNew);

        this.iframeTrustedIPs.waitForExist({timeout: 10000});
        browser.switchToFrame(this.iframeTrustedIPs);
        this.inpStartAddr.setValue(start);
        this.inpEndAddr.setValue(end);

        this.btnSave.waitForExist({timeout: 5000});
        this.jsClick(this.btnSave);
    }

    open () {
        return super.open('lightning/setup/NetworkAccess/home');
    }
}

module.exports = new SetupPage();