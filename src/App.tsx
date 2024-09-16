import './App.css';
import AddPost from './components/AddPost';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import MainPosts from './components/MainPosts';
import MostViewed from './components/MostViewed';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <MainPosts></MainPosts>
      <MostViewed></MostViewed>
      <Banner></Banner>
      <Login></Login>
      <Profile></Profile>
      <AddPost></AddPost>
      <Post></Post>
    </>
  );
}

export default App;
