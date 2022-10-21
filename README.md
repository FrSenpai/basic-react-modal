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

## License

MIT © [FrSenpai](https://github.com/FrSenpai)
