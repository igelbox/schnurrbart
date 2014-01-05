# schnurrbart.js - Logic-full {{schnurrbärte}} templates with JavaScript

## Usage

Below is quick example how to use schnurrbart.js:

```js
var model = {
  name: 'Schreibikus',
  schreib: function (header, nachricht) {
    return header.toUpperCase() + '\n' + nachricht;
  }
};

var output = schnurrbart("{{name}} schreib {{schreib('hdr', 'msg')}}", model);
```

In this example, the `schnurrbart` function takes two parameters: 1) the schnurrbart template and 2) a `model` object that contains the data and code needed to render the template.

-
published under the liberal terms of the BSD License, see the [LICENSE](LICENSE) file.
