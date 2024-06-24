import { useState } from 'react';
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
 const [alertVisible, setAlertVizibility]= useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVizibility(false)}>My alert</Alert>}
      <Button color = 'secondary' onClick={() => setAlertVizibility(true)}>My button</Button>
    </div>
  )
}
export default App
