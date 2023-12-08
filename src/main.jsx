import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //app context is been imported and changes instead of react.strictNode
  //now all the states and values passed to the children property will now be used for all app and its nested components
  <AppContext>
          <App />
  </AppContext>
)
