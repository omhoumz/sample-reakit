import React from "react"
import { Provider, Button } from "reakit"
import theme from "reakit-theme-default"

const App = () => (
  <Provider theme={theme}>
    <h1>Heading's are better</h1>
    <Button>Click here</Button>
  </Provider>
)

export default App
