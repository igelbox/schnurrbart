eval(require('fs').readFileSync('schnurrbart.js')+'');//loading library


var model = {
  name: 'Schreibikus',
  sagen: function (name) {
    return 'Hallo ' + name + '. Ich heisse ' + this.name + '.';
  }
};

var output = schnurrbart("{{name}}: {{sagen('Welt')}}", model);
console.log(output);
