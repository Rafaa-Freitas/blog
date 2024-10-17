import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Paths() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Paths;
