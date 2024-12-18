import './App.css';
import {Routes , Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Resume1 } from './components/Resume1';
import { Resume2 } from './components/Resume2';
import { store } from './redux/store';            
import {Provider} from 'react-redux';
import { Choose } from './components/Choose';

function App() {
  return (
    <Provider store ={store}>

    <div className="App">
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/resume1' element={<Resume1></Resume1>}></Route>
      <Route path='/resume2' element={<Resume2></Resume2>}></Route>
      <Route path='/choose' element={<Choose></Choose>}></Route>
     </Routes>
    
    </div>
    </Provider>
  );
}

export default App;
