import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from '../src/store/index';
import rootSaga from '../src/store/saga';
import './App.css'

import Signup from "./components/SignUp/Signup";
import { isLoggedIn } from "./utils";
import { Addauthor } from "./components/Addauthor/Addauthor";
function App() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(appReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);


  return (
    <div className="container" >
      { }
      <BrowserRouter>
        <StoreProvider store={store}>
          <Topbar />
          <Routes >

            <Route exact path="/" element={isLoggedIn() ? <Home /> : <Signup Signup={false} />} />

            <Route exact path="/author" element={isLoggedIn() ? <Addauthor /> : <Navigate replace to="/" />} />
            <Route exact path="/signup" element={isLoggedIn() ? <Home /> :<><Signup Signup={true} /></>}/>
            <Route exact path="/signin" element={isLoggedIn() ? <Home /> :<><Signup Signup={false} /></>}/>
              <Route
              path="/*"
              element={<Navigate to="/" />}
            />

          </Routes>

        </StoreProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
