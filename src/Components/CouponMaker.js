import React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { Button } from 'reactstrap'

setConfig({
  showReactDomPatchNotification: false
})

const Couponer = () => {
  return (<Button>Hello World from Gustavo!</Button>)
}

export default hot(module)(Couponer)
