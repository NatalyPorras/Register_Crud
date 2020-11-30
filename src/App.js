import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
const history = createBrowserHistory()
let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter history={ history}>
        {renderRoutes(routes)}
      </BrowserRouter>
  </MuiThemeProvider>
  );
}

export default App;
