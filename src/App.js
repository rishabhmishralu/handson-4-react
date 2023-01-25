import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Student from './component/Student';
import Contact from './component/Contact';
import Home from './component/Home';
import Form from './component/Form';
import Update from './component/Update';
function App() {
  return (
    <BrowserRouter>
    <>
       <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path="/contact" element={<Contact/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/update' element={<Update/>}/>
      </Routes>
    </div>
    </>
    </BrowserRouter>
    
  );
}

export default App;
