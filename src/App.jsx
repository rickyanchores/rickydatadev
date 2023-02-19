import React from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
      </Router>
    </div>
  )
}

export default App;