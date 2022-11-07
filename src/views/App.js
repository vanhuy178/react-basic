import './App.scss';
import Home from './Home/Home';
import Navbar from './Nav/Navbar';
import ListTodo from './Todos/ListTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About/About';
import User from './User/User';
import DetailUser from './User/DetailUser';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        {/* <ListTodo /> */}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path='/todo' element={<ListTodo />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' exact={true} element={<User />} />
          <Route path='/user/:id' element={<DetailUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
