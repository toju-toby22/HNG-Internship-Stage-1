import logo from './logo.svg';
import Homepage from "./pages/Homepage"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
     return (
          <div>
               <BrowserRouter>
                    <Routes>
                         <Route element={<Homepage />} path="/" />
                         
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
