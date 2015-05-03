var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
   //      expect(result.styles).to.eql({ App:
   // { main: { width: '100%', height: '100%' },
   //   button: { background: 'blue' } },
   //  Widget: { main: { background: 'yellow' } } });
        console.log(result.css);
        console.log(result.messages);
        done();
    });
};

describe('postcss-component', function () {

    it('does something', function (done) {
        test(`
@component App {
  .main {
    width: 100%;
    height: 100%;
  }
  .button {
    background: blue;
  }
}

@component Widget {
  .main {
    background: yellow;
  }
}

.main {
  background: #fff;
}`, `
.main {
  background: #fff;
}`, {}, done);
    });

});
