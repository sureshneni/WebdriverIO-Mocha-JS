# WebdriverIO-Mocha-JS
Framework by integrating WebdriverIO with Javascript and Mocha

Application used for this framework development is:
https://parabank.parasoft.com/parabank/index.htm

So user can register first and use that username and password in testdata.json file under testData folder.

testdata.json:

"login": {
      "password":      "",
      "userName":       ""
}

Initial setup:
==============================

Prerequisite:

Java(any latest version)
VSCode(any editor)
Npm(latest version)



1.	Create a project folder in any directory as shown below:
C:\NewGitProjects\WebdriverIO-Javascript-Mocha

2.	Open Any editor , preferably VSCode and navigate to that folder.

3.	Open terminal and create package.json file with basic information as shown below.

C:\NewGitProjects\WebdriverIO-Javascript-Mocha> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webdriverio-javascript-mocha) com.demo
version: (1.0.0)
description: demo framework on webdriverio
entry point: (index.js)
test command:
git repository:
keywords:
author: Suresh Babu
license: (ISC)
About to write to C:\NewGitProjects\WebdriverIO-Javascript-Mocha\package.json:

{
  "name": "com.demo",
  "version": "1.0.0",
  "description": "demo framework on webdriverio",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Suresh Babu",
  "license": "ISC"
}


Is this OK? (yes) yes
PS C:\NewGitProjects\WebdriverIO-Javascript-Mocha>

4.	Install WebdriverIO packages.
              C:\NewGitProjects\WebdriverIO-Javascript-Mocha> npm i --save-dev @wdio/cli      
              Once it installed successfully, in package.json we can see webdriverio dependency as below:
               "devDependencies": {
          "@wdio/cli": "^7.3.1"
       }

               Above command we run, will download the latest webdriverio dependencies, if we need any backword versions, manually we can configure in package.json file.

5.	Its time to create WebdriverIO configuration file where we keep all information like from location of the test files to reporting details, this config file we call as wdio.conf.js file
So it stime to create wdio.config file
            C:\NewGitProjects\WebdriverIO-Javascript-Mocha> npx wdio config
             And follow the instructions and select configurations as per our need, once everything is done we will see below kind of logs for successfully setup.
-	  …… ….  …. …. …
-	…….. …… ……. ……
-	……..  …….. …….. ……

added 43 packages from 51 contributors, removed 15 packages, updated 4 packages and audited 416 packages in 47.376s

37 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Packages installed successfully, creating configuration file...

Config file installed successfully, creating test files...

Configuration file was created successfully!
To run your tests, execute:
$ npx wdio run wdio.conf.js

PS C:\NewGitProjects\WebdriverIO-Javascript-Mocha>

Once we complete above steps, project hierarchy will display as below:

 

6.	In package.json, configure ‘test’command as shown below:

    "scripts": {
      "test": "wdio wdio.conf.js"
    },
    
7. In wdio.conf.js file, ensure we have AUTO url pointed to baseUrl attribute as shown below:
   baseUrl: 'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC',

8.	To run spec file:

 C:\NewGitProjects\WebdriverIO-Javascript-Mocha> npm run test



