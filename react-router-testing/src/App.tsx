import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { PostForm } from "./components/PostForm/PostForm";
import { PostList } from "./components/PostList/PostList";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/NotFound/NotFound";
import { Nav } from "./components/Nav/Nav";
import { About } from "./pages/About/About";
import { Settings } from "./pages/Settings/Settings";
import { UserList } from "./pages/UserList/UserList";
import { User } from "./pages/User/User";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/UserList" element={<UserList/>} />
        <Route path="/:userID/:userName" element ={<User/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
