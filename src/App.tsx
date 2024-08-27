import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import MainPosts from './components/MainPosts';
import MostViewed from './components/MostViewed';
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
    </>
  );
}

export default App;
