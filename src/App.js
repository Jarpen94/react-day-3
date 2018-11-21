import React from 'react'

import Button from './components/Button'
import Paper from './components/Paper'




const App = (props) => (
  <Paper>
    <Button
      onClick={() => alert('false')}
    />
    <Button
      onClick={() => alert('true')}
    />

  </Paper>
)

export default App