# postcss-component

> [PostCSS](https://github.com/postcss/postcss) plugin to transform `@component` rules into javascript objects and remove from CSS file

WIP

```css
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
