import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import MainPosts from './components/MainPosts';
import MostViewed from './components/MostViewed';

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <MainPosts></MainPosts>
      <MostViewed></MostViewed>
      <Banner></Banner>
    </>
  );
}

export default App;
