import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <div className="App h-screen bg-[#0f0f0f] text-white">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
