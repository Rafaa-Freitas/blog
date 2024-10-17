import Banner from './Banner';
import Hero from './Hero';
import MainPosts from './MainPosts';
import MostViewed from './MostViewed';

function Home() {
  return (
    <>
      <Hero></Hero>
      <MainPosts></MainPosts>
      <MostViewed></MostViewed>
      <Banner></Banner>
    </>
  );
}

export default Home;
