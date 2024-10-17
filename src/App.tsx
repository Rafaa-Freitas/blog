import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <>
  //     <Header></Header>
  //     <Home></Home>
  //     <Login></Login>
  //     <Profile></Profile>
  //     <AddPost></AddPost>
  //     <Post></Post>
  //   </>
  // );
}

export default App;
