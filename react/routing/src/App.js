import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
import Colors from './components/Colors';

function App() {

    return(
        <div>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/:url' element={<Input />}/>
                <Route path='/:url/:color/:bgColor' element={<Colors />}/>
            </Routes>
        </div>
    );
}

export default App;
