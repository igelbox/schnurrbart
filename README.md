# schnurrbart.js - Logic-full {{schnurrbärte}} templates with JavaScript

## Usage

Below is quick example how to use schnurrbart.js:

```js
var model = {
  name: 'Schreibikus',
  sagen: function (name) {
    return 'Hallo ' + name + '. Ich heisse ' + this.name + '.';
  }
};

var output = schnurrbart("{{name}}: {{sagen('Welt')}}", model);
```

In this example, the `schnurrbart` function takes two parameters: 1) the schnurrbart template and 2) a `model` object that contains the data and code needed to render the template, and provides following `output`:
```
Schreibikus: Hallo Welt. Ich heisse Schreibikus.
```

-
published under the liberal terms of the BSD License, see the [LICENSE](LICENSE) file.
