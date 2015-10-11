[![Build Status](https://travis-ci.org/maximx1/lollichrome-theme-gen.svg)](https://travis-ci.org/maximx1/lollichrome-theme-gen)
[![Stories in Ready](https://badge.waffle.io/maximx1/lollichrome-theme-gen.png?label=ready&title=Ready)](https://waffle.io/maximx1/lollichrome-theme-gen)

Lollichrome-theme-gen
=====================

### Description
Script to generate theme-color meta tag for lollipops chrome bar coloring. Chrome uses a little meta tag to generate a theme color in lollipop. If you have chrome set to unify apps and tabs into the app switcher this theme coloring follows. 

The object of this project is to first set up an auto generator that will change the themes based on the time. Additionally it will be optimal to set up a plugin system so that people can create their own switches for coloring. 

### Installation
You install the latest version through npm. [You can find the latest version here](https://www.npmjs.com/package/lollichrome-theme-gen)

```shell
npm install lollichrome-theme-gen
```

To use just include the import into your script that will be browserified:

```javascript
require("lollichrome-theme-gen")();
```

### Extending
Don't like the default colors? Want to plug into a database to allow users to select their theme? Want to randomize? You can easily extend the theme:

```Javascript
var newPlugin = function() {
    this.createColor = function() {
        return "#AAAAAA";    //Any thing that returns a string of the color you want.
    };
};

require("lollichrome-theme-gen")(new newPlugin());
```