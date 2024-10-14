import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/main' element={<MainPage/>} />
    </Routes>
  );
}

export default App;
