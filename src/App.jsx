import './App.css'
import Navbar from './navbar'
import NoPage from './nopage';
import Home from './home';
import AboutMe from './bio';
import Portfolio from './portfolio';
import Certification from './certification';
import Blogs from './blogs';
import Tutorials from './tutorials';
import Contact from './contact';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (<div>
    <div>
      <Navbar />
    </div>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
           <Route path="bio" element={<AboutMe />} />
           <Route path='portfolio' element={<Portfolio />}/>
           <Route path='certification' element={<Certification />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path='tutorials' element={<Tutorials/>} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App
