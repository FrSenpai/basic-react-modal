import React from 'react'

import { CustomModal } from 'basic-react-modal'
import 'basic-react-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const contentModal = (
    <>
      <h2>It's a title</h2>
      <p>John Titor was probably right</p>
      <button onClick={() => setShowModal(!showModal)}>Okay</button>
    </>
  )
  return (
    <section>
      <h1>Basic react modal</h1>
      <button onClick={() => setShowModal(!showModal)}>Open the modal</button>
      <CustomModal show={showModal} children={contentModal} close={() => setShowModal(!showModal)} contentContainerStyle={{backgroundColor:"gray"}}  />
    </section>
  )
}

export default App
