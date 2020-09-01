# Salesforce IP Allower
This repository contains a script which allows all the IPs to connect to a Salesforce Sandbox without Authentication Code required. Just use it in your own risk and it is suggested just to setup this in a sandbox environment, not production.

## Installation
1. Clone the repo.
2. Setup a `.env` file with your credentials. You can use `.env.example` as a template.
3. Execute `npm install` to install all dependencies.

## Salesforce Setup
1. Get your public IP address, you can search in google the term `what is my ip` and you will get it.
2. Go to `Setup` and go to`Network Access` section. If you do not see the section, be sure of be admin or any user with similar permissions.
3. Once in `Network Access`, click in `New` button and enter a range which covers your IP, for example if you have the IP `189.216.112.254` you can use a range like `189.216.112.0 - 189.217.112.0`. Avoid use IP ranges like `189.0.0.0 - 190.0.0.0` because it may cause conflicts once running the script.
4. Once added the correct range, click save and your sandbox should be ready to be configured.

**Note:** This setup has to be done just before running the script, because the public IP is refreshed every certain amount of days or weeks.

## Usage
1. To run the script use the command `npx wdio wdio.conf.js` and wait for being added all the IPs.

**Note:** If you get some error about an already inserted IP address, be sure of delete already added IP ranges which can look like `X.0.0.0 - X+1.0.0.0` try to avoid the 0 value on all three last IP octets.

## FAQ
**Q. Should I run this script everytime I use my sandbox?**
A. This setup should be runned just once per sandbox unless the sandbox is reset to default.

**Q. Should I run this script for all the users in my sandbox?**
A. This setup is for all the sandbox, so once setup in one user all the users will not need the authentication code.

**Q. If I already added manually some IPs, can I modify the range of IPs created?**
A. To update the IP range you can check the file `test/specs/allowIP.e2e.js` and update the block named `'should open network access settings'`. In other case you can delete the already created IPs.
