import React from 'react'
import ReactDOM from 'react-dom'
import ListPosts from './ListPosts'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/Login" component={Login} /> */}
        <Route path="/" component={ListPosts}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
