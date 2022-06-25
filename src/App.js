import Home from './components/Home/Home'
import CreateBlog from './components/CreateBlog/CreateBlog'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
