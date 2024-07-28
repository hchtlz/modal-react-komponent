# React Modal Komponent

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

### Simple example

```javascript
import { Modal } from "modal-react-komponent";
import { useState } from "react";

export default function MyApp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open modal</button>
      <Modal
        title="Hi folks!"
        message="Hello from modal-react-komponent"
        buttonText="Close modal"
        isOpen={isOpen}
        toggleOpen={toggleModal}
      />
    </div>
  );
}
```

## Custom

#### You can custom the modal using 5 parameters

| Parameter    | Type       | Description                          |
| :----------- | :--------- | ------------------------------------ |
| `title`      | `string`   | The title of the modal               |
| `message`    | `string`   | The message displayed in the modal   |
| `buttonText` | `string`   | The text of the close button         |
| `isOpen`     | `boolean`  | Controls the open state of the modal |
| `toggleOpen` | `function` | Function to change the open state    |

## Screenshot

This is a simple preview of the modal

<!--![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/5abd62a3-159f-449e-8677-4c494fbe8626)-->

![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/704c54fd-03bf-4e69-a88f-fa5e256d824f)

## Authors

- [@hchtlz](https://www.github.com/hchtlz)
