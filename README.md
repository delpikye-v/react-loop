<div align="center">
    <h1>react-loop-z</h1>
    <a href="https://www.npmjs.com/package/react-loop-z">react-loop-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/dc9msq">LIVE EXAMPLE</a></b>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-loop-z.svg)](https://www.npmjs.com/package/react-loop-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![downloads](https://img.shields.io/npm/dt/react-loop-z.svg)

---
## Description
+ React wrapper loop.
+ Simple, clean.
+ Loop object.

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

<For
    of={[
        { shortName: 'su1', name: '' },
        { shortName: 'm', name: '' },
        { shortName: 't', name: '' },
        { shortName: 'w', name: '' },
        { shortName: 't', name: '' },
        { shortName: 'f', name: '' },
        { shortName: 'sa2', name: '', dateClassName: 'abcd' },
    ]}
    keyName="shortName"  // require: only tag: for
></For>

// ****************************************************************
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
// if render is undefined, the object's display value
```
<br />

## Note


## License

[MIT](https://mit-license.org/)
