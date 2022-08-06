<!--rehype:ignore:start--> 
react-keywords
===
<!--rehype:ignore:end-->

[![CI](https://github.com/uiwjs/react-keywords/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-keywords/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/react-keywords.svg)](https://www.npmjs.com/package/react-keywords)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/react-keywords/file/README.md)

Highlight a keyword in a piece of text and return a React element.

<a href="https://uiwjs.github.io/react-keywords">
<img width="518" alt="Highlight keyword" src="https://user-images.githubusercontent.com/1680273/182382842-c991e9ef-353d-45b0-9e5a-319b56e397d8.png">
</a>

## Installation

```bash
npm i react-keywords
```

## Basic Usage

```jsx
import React from 'react';
import Keywords from 'react-keywords';

export default function Demo() {
  return (
    <Keywords value="react">
      Highlight a keyword in a piece of text and return a React element.

      React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

      Build encapsulated components that manage their own state, then compose them to make complex UIs.
    </Keywords>
  );
}
```

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import Keywords from 'react-keywords';

export default function Demo() {
  const [value, setValue] = useState('react');
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <Keywords value={value}>
        Highlight a keyword in a piece of text and return a React element.

        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Build encapsulated components that manage their own state, then compose them to make complex UIs.
      </Keywords>
    </Fragment>
  );
}
```

### render

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import Keywords from 'react-keywords';

export default function Demo() {
  const [value, setValue] = useState('react');
  const highlight = (txt) => <span style={{ background: 'red', color: '#fff' }}>{txt}</span>;
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <Keywords value={value} render={highlight}>
        Highlight a keyword in a piece of text and return a React element.
      </Keywords>
    </Fragment>
  );
}
```

### color

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import Keywords from 'react-keywords';

export default function Demo() {
  const [value, setValue] = useState('react');
  const highlight = (txt) => <span style={{ background: 'red', color: '#fff' }}>{txt}</span>;
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <Keywords value={value} color="red" backgroundColor="">
        Highlight a keyword in a piece of text and return a React element.
      </Keywords>
    </Fragment>
  );
}
```

### caseIgnored

Case is ignored by default `caseIgnored=true`.

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import Keywords from 'react-keywords';

export default function Demo() {
  const [value, setValue] = useState('re');
  const text = `caseIgnored={true} Highlight A Keyword In A Piece Of Text And Return A React Element.`
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <br />
      <Keywords value={value} color="red" backgroundColor="">
        {text}
      </Keywords>
      <br />
      <Keywords
        value={value}
        caseIgnored={false}
        children={`caseIgnored={false} Highlight a keyword in a piece of text and return a React element.`}
      />
    </Fragment>
  );
}
```

## Support bundle

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/@babel/standalone@7.18.10/babel.min.js" crossorigin></script>
    <script src="https://unpkg.com/react@18.x/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18.x/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@uiw/codepen-require-polyfill/index.js" crossorigin></script>
  </head>
  <body>
    <div id="container" style="padding: 24px"></div>
    <script src="https://unpkg.com/react-keywords/dist/keywords.min.js"></script>
    <script type="text/babel">
      import Keywords from 'react-keywords';

      function Demo() {
        const [value, setValue] = React.useState('react');
        return (
          <React.Fragment>
            <input value={value} onChange={(evn) => setValue(evn.target.value)} />
            <Keywords value={value}>
              Highlight a keyword in a piece of text and return a React element.
            </Keywords>
          </React.Fragment>
        );
      }
      const container = document.getElementById('container');
      const root = ReactDOM.createRoot(container);
      root.render(<Demo />);
    </script>
  </body>
</html>
```

## API

```ts
import { FC, PropsWithChildren } from 'react';
export interface KeywordsProps {
  value?: string;
  color?: string;
  caseIgnored?: boolean;
  backgroundColor?: string;
  render?: (keyword: string, color: string, backgroundColor: string) => JSX.Element;
}
declare const KeywordsInner: FC<PropsWithChildren<KeywordsProps>>;
export default KeywordsInner;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-keywords/graphs/contributors">
  <img src="https://uiwjs.github.io/react-keywords/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
