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
      <button onClick={toggleModal}>Ouvrir la modal</button>
      <Modal
        title="Salut à tous !"
        message="Bonjour depuis modal-react-komponent"
        buttonText="Fermer"
        isOpen={isOpen}
        toggleOpen={toggleModal}
      />
    </div>
  );
}
```

## Custom

#### You can custom the modal using 5 parameters

| Parameter    | Type       | Description                              |
| :----------- | :--------- | ---------------------------------------- |
| `title`      | `string`   | Le titre de la modal                     |
| `message`    | `string`   | Le message affiché dans la modal         |
| `buttonText` | `string`   | Le texte du bouton de fermeture          |
| `isOpen`     | `boolean`  | Contrôle l'état d'ouverture de la modal  |
| `toggleOpen` | `function` | Fonction pour changer l'état d'ouverture |

## Screenshot

This is a simple preview of the modal

<!--![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/5abd62a3-159f-449e-8677-4c494fbe8626)-->

![giphy](https://github.com/hchtlz/modal-react-komponent/assets/93914147/704c54fd-03bf-4e69-a88f-fa5e256d824f)

## Authors

- [@hchtlz](https://www.github.com/hchtlz)
