This is a simple project that explains how to run Jasmine BDD specs over modules loaded with require.js, in four different environments:

 * JsTestDriver
 * Node.js
 * Web browser
 * Maven build


Check out the wiki pages to see how I came up with this result:

https://github.com/podefr/jasmine-reqjs-jstd/wiki

##Try it for yourself

After cloning/downloading the repository, if you want to execute the tests:

###JsTestDriver

Change directory to the root of the project 

```bash
java -jar tools/JsTestDriver/JsTestDriver-1.3.4.b.jar --port 4224 &
```

connect your browsers to http://localhost:4224/capture

```bash
java -jar tools/JsTestDriver/JsTestDriver-1.3.4.b.jar --tests all
```

###Node.js

simply execute the tests.js file

```bash
node tests.js
```

###Web browser

open the tests.html page

```bash
open tests.html
```

###Maven build

simply execute: 
```bash
mvn clean test
```
The Maven build will automatically start whatever the default browser is, it will start the JsTestDriver server automatically, and then it will execute the tests.
Optionally, you can choose which browser to be used during tests by using the following command:

```bash
mvn clean test -DbrowserPath=path/to/my/browser
```