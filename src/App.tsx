import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Auth/login';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
}

export default App;
