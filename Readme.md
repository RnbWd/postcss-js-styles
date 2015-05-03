# postcss-js-styles

> [PostCSS](https://github.com/postcss/postcss) plugin to transform css into javascript objects

WIP

```css
.main {
  background: #fff;
  width: 100%;
  height: 100%;
}
.button {
  background: blue;
}

```

Will return `result.toJS()`:


```js
/* result.toJS() */

{ main: { background: '#fff', width: '100%', height: '100%' },
  button: { background: 'blue' } }
```
