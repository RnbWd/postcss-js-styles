var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.toJS()).to.eql(output);
        console.log(result.toJS());
        // console.log(result.messages);
        done();
    });
};

describe('postcss-component', function () {

    it('does something', function (done) {
        test(`
.main {
  background: #fff;
  width: 100%;
  height: 100%;
}
.button {
  background: blue;
}
`, { main: { background: '#fff', width: '100%', height: '100%' },
  button: { background: 'blue' } }, {}, done);
    });

});
