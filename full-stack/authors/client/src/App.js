import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Update from './views/Update';
import Create from './views/Create';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Main />} path='/' />
                <Route element={<Create />} path='/new' />
                <Route element={<Update />} path='/edit/:id' />
            </Routes>
        </div>
    );
}

export default App;