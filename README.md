<div align="center">
    <h1>react-loop-z</h1>
    <a href="https://www.npmjs.com/package/react-loop-z">react-loop-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/dc9msq">LIVE EXAMPLE</a></b>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-loop-z.svg)](https://www.npmjs.com/package/react-loop-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---
## Description
+ React wrapper loop
+ Simple, clean

## Installation

install via npm:
```
npm i react-loop-z
```

## Usage

#####

```js
import { For, Do, While, MapLoop, SetLoop, ObjectLoop } from 'react-loop-z';

/**
main props:
- of: data (object or array) - required
- as: tag. Default is div - optional
- propsTagAs: props of tag As - depends on tag
*/

// ****************************************************************
// ****************************************************************
<For
    of={['foo', 'bar']}
    {/* render={(item, index) => {
        return (
            <span key={index}>Hello, {item}</span>
        );
    }} */}
/>

// ****************************************************************
//  Do (Careful with infinite loops.)
<Do
    condition={() => {
        return param < 2;
    }}
    render={(index) => {
        param++;
        return (
            <span key={index}>Hello, {index}</span>
        );
    }}
/>

// ****************************************************************
//  While (Careful with infinite loops.)
<While
    condition={() => {
        return param++ < 2;
    }}
    render={(index) => {
        return (
            <span key={index}>Hello, {index}</span>
        );
    }}
/>

// ****************************************************************
//  MapLoop
const map = new Map([
    ['delpikye', 'freelance'],
    ['hello', 'world'],
]);

<MapLoop
    of={map}
    {/* render={(value, key, index) => {
        return (
            <span key={index}>DelpiK - Freelancer, {key}-{value}</span>
        );
    }} */}
/>

// ****************************************************************
// SetLoop
const set = new Set<string>([
    'foo',
    'bar',
]);
<SetLoop
    of={set}
    {/* render={(item, index) => {
        return (
            <span key={index}>DelpiK - Freelancer, {item}</span>
        );
    }} */}
/>

// ****************************************************************
// ObjectLoop
const param = {
        'foo': 'bar',
        'hello': 'world',
    };
<ObjectLoop
    of={param}
    {/* render={(value, key, index) => {
        return (
            <span key={index}>DelpiK - Freelancer, {key}-{value}</span>
        );
    }} */}
/>
```
<br />

## Note


## License

[MIT](https://mit-license.org/)
