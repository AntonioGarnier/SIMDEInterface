import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SIMDETheme from './Components/styles/SIMDETheme'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { store } from './Store'


ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider muiTheme={getMuiTheme(SIMDETheme)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
