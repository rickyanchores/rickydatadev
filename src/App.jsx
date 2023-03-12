import React from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Projects from './Pages/Projects/Projects';
import Services from './Pages/Services/Services';
import Banner from './Components/Banner/Banner';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Test from './Components/Test/Test';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
        <Banner />
        <Services />
        <Projects />
        <About />
        <Footer />
        <Test />
      </Router>
    </div>
  )
}

export default App;