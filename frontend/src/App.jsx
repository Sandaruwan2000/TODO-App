
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Hearder from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Signin from './pages/Signin';
import Customerprofile from './pages/User';
import List from './pages/List';
import Signup from './pages/Signup';
import User from './pages/User';

export default function App() {
  return (
    <BrowserRouter>

    <Hearder/>
     <Routes>

        <Route path="/" element={<List />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/profile" element={<User/>} />
        
        
         <Route path="/signup" element={<Signup/>} />
        

     </Routes>
     </BrowserRouter>
  )
}
