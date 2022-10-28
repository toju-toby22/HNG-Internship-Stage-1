// import logo from './logo.svg';
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

// echo "# HNG-internship-Stage-1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/toju-toby22/HNG-internship-Stage-1.git
// git push -u origin main