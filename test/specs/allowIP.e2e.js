const LoginPage = require('../pageobjects/login.page');
const SetupPage = require('../pageobjects/setup.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        
        LoginPage.login(process.env.SF_USERNAME, process.env.SF_PASSWORD);
        expect(browser).toHaveTitle('Home | Salesforce');
    });

    it('should open network access settings', () => {
        SetupPage.open();
        //expect(browser).toHaveTitle('Network Access | Salesforce');

        for (let index = 0; index < 255; index += 2) {
            SetupPage.whiteListNewAddress(`${index}.0.0.0`, `${index+1}.255.255.255`);
        }
    });
});


