
# React Modal  Komponent

React Modal Komponent is a simple and customizable modal component for React applications.

https://www.npmjs.com/package/modal-react-komponent
###

![made-with-npm](https://img.shields.io/badge/npm-323330?style=for-the-badge&logo=npm&logoColor=F7DF1E)

![react](https://img.shields.io/badge/react-blue.svg?style=for-the-badge&logo=react&logoColor=white)

![typescript](https://img.shields.io/badge/typescript-yellow.svg?style=for-the-badge&logo=typescript&logoColor=white)
## Installation

You can install React Modal Komponent via npm:

```bash
  npm i modal-react-komponent
```
## Usage

To use React Modal Komponent in your application, simply import it and render it within your component hierarchy.

```javascript
import { Modal } from 'modal-react-komponent';

export default function MyApp() {
  const modal = Modal({ title: 'Hi folks !', message: 'Hello from modal-react-komponent', buttonText: 'Close' });
  return (
    <div>
      <button className='button' onClick={() => modal.open()}>
        Ouvrir la modal
      </button>
    </div>
  );
}

```
## Custom

#### You can custom the modal using 3 parameters

| Parameter | Type     |
| :-------- | :------- |
| `title` | `string` |

| `message` | `string` |
| `buttonText` | `string` |

## Screenshot

This is a simple preview of the modal

<!--![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/5abd62a3-159f-449e-8677-4c494fbe8626)-->

![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/704c54fd-03bf-4e69-a88f-fa5e256d824f)

## Authors

- [@hchtlz](https://www.github.com/hchtlz)

