import './App.css';
import HomePage from './routes/HomePage';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/SignUp';
import Nav from './nav';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
      <Route index element={<HomePage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
