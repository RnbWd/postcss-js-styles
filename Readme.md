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

Will return:

```css
/* result.css */
.main {
  background: #fff;
}
```

```js
/* result.styles */
{
  App: {
    main: { width: '100%', height: '100%' },
    button: { background: 'blue' }
  },
  Widget: {
    main: { background: 'yellow' }
  }
}
```
