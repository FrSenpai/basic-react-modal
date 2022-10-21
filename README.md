# basic-react-modal

> A simple and easy to use modal

[![NPM](https://img.shields.io/npm/v/basic-react-modal.svg)](https://www.npmjs.com/package/basic-react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save basic-react-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import {CustomModal} from 'basic-react-modal'
import 'basic-react-modal/dist/index.css'

App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const contentModal = (
    <>
      <h2>It's a title</h2>
      <p>John Titor was probably right</p>
      <button onClick={() => setShowModal(!showModal)}>Okay</button>
    </>
  )
  return (
    <div>
      <h1>Basic react modal</h1>
      <button onClick={() => setShowModal(!showModal)}>Open the modal</button>
      <CustomModal show={showModal} children={contentModal} close={() => setShowModal(!showModal)}  />
    </div>
  )
}
```

## Typescript support

Step 1 --> create a new file in the root folder called "typings.d.ts" by example
Step 2 --> add to it : declare module "basic-react-modal"
Step 3 --> Go to tsconfig.json and add into "includes" the name of your file (typings.d.ts by example)
Step 4 --> No more "any" errors 

## License

MIT © [FrSenpai](https://github.com/FrSenpai)
