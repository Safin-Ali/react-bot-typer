# react-bot-typer

## 📑 Overview

[![npm version](https://badgen.net/npm/v/react-bot-typer)](https://www.npmjs.com/package/react-bot-typer)
[![npm version](https://badgen.net/github/license/Safin-Ali/react-bot-typer)](https://github.com/Safin-Ali/react-bot-typer/blob/main/LICENSE)
[![npm version](https://badgen.net/npm/dw/react-bot-typer)](https://www.npmjs.com/package/react-bot-typer)

The `react-bot-typer` is react component for auto-type animation. This is not `CSS Anim` rather it's appeding text characters in DOM. that's why this would be good for performance.

| dependency                          | weekly downloads                                         |
| ----------------------------------- | -------------------------------------------------------- |
| [react](https://www.npmjs.com/package/react)   | ![npm version](https://badgen.net/npm/dw/react)
| [react-dom](https://www.npmjs.com/package/react-dom) | ![npm version](https://badgen.net/npm/dw/react-dom)

## 🔧 Installation

You can install `react-bot-typer` via npm:

```bash
npm install --save react-bot-typer
```
### or
```bash
yarn add react-bot-typer
```

## 🧑‍💻 Usage:
```js
<AutoType
	className={`myCss`}
	alternate={true}
	delay={1}
	textArr={['Desktop', 'Mobile', 'Laptop', 'Smart Watch']}
	typeSpeed = {1}
/>
```

## 🔩 API:

| Name | Description | Type | Default |
|:---:|:---:|:---:|:---:|
| alternate | for text backward  | boolean | false |
| className | for css class | string | none |
| cursorColor | for cursor color | hex or inherit | #1b1b1b |
| delay | waiting time (second) for next text | number | 0 |
| onceType | for only one time text write | boolean | false |
| removeSpeed | text backward speed (sec) | number | 0 |
| style | for inline style | React.CSSProperties | none |
| textArr | there will be text which will animate | string[] | [] |
| typeSpeed | text forward speed (sec) | number | 0.5 |

## 📞 Contact

If you have any questions, feedback, or need assistance with this package, feel free to reach out:

- Author: Safin Ali
- Email: safin.ali.7205@gmail.com
- GitHub: [github.com/Safin-Ali](https://github.com/Safin-Ali)
- Website: [https://safin-ali.vercel.app](https://safin-ali.vercel.app/)


😊😁
*Please review it and let me know if you have any specific concerns or if you'd like further changes.*