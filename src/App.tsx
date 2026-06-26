
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-bg text-accent flex items-center justify-center">
      {/* <Navbar /> */}

      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App
