<div align="center">
  <h1>react-loop-z</h1>
  <a href="https://www.npmjs.com/package/react-loop-z">NPM Package</a> ·
  <a href="https://codesandbox.io/p/sandbox/dc9msq">Live Example</a>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-loop-z.svg)](https://www.npmjs.com/package/react-loop-z)
![Downloads](https://img.shields.io/npm/dt/react-loop-z.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

## 📖 Description
`react-loop-z` is a **React wrapper for looping** data structures.  
It provides simple, clean, and declarative components for rendering arrays, objects, maps, sets, and conditional loops.

---

## 📦 Installation

```bash
npm install react-loop-z
# or
yarn add react-loop-z
```

---

## 🚀 Usage

### Available Components
- **For** – iterate over arrays  
- **Do** – do...while loop (⚠️ careful with infinite loops)  
- **While** – while loop (⚠️ careful with infinite loops)  
- **MapLoop** – iterate over `Map`  
- **SetLoop** – iterate over `Set`  
- **ObjectLoop** – iterate over object keys/values  

---

### 🔁 For
```tsx
import { For } from "react-loop-z";

<For
  of={["foo", "bar"]}
  render={(item, index) => (
    <span key={index}>Hello, {item}</span>
  )}
/>

<For
  of={[
    { shortName: "su1", name: "" },
    { shortName: "m", name: "" },
    { shortName: "t", name: "" },
    { shortName: "w", name: "" },
    { shortName: "t", name: "" },
    { shortName: "f", name: "" },
    { shortName: "sa2", name: "", dateClassName: "abcd" },
  ]}
  keyName="shortName"   // only required for <For />
/>
```

---

### 🔂 Do
```tsx
import { Do } from "react-loop-z";

let param = 0;

<Do
  condition={() => param < 2}
  render={(index) => {
    param++;
    return <span key={index}>Hello, {index}</span>;
  }}
/>
```

---

### 🔄 While
```tsx
import { While } from "react-loop-z";

let param = 0;

<While
  condition={() => param++ < 2}
  render={(index) => (
    <span key={index}>Hello, {index}</span>
  )}
/>
```

---

### 🗺️ MapLoop
```tsx
import { MapLoop } from "react-loop-z";

const map = new Map([
  ["delpikye", "freelance"],
  ["hello", "world"],
]);

<MapLoop
  of={map}
  render={(value, key, index) => (
    <span key={index}>
      {key} - {value}
    </span>
  )}
/>
```

---

### 🧩 SetLoop
```tsx
import { SetLoop } from "react-loop-z";

const set = new Set(["foo", "bar"]);

<SetLoop
  of={set}
  render={(item, index) => (
    <span key={index}>{item}</span>
  )}
/>
```

---

### 🗂️ ObjectLoop
```tsx
import { ObjectLoop } from "react-loop-z";

const obj = {
  foo: "bar",
  hello: "world",
};

<ObjectLoop
  of={obj}
  render={(value, key, index) => (
    <span key={index}>
      {key} - {value}
    </span>
  )}
/>

// If `render` is undefined, it will display the object’s value by default
```

---

## ⚠️ Notes
- `Do` and `While` may create **infinite loops** if the condition never becomes false.  
  Always ensure you update state/variables properly inside the loop.

---

## 📄 License
[MIT](https://mit-license.org/) © [DelpiK](https://github.com/delpik)
