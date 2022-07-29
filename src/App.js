import Home from './components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost'
import UniquePost from './components/UniquePost/UniquePost'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EditPost from './components/EditPost/EditPost'
import MyPosts from './components/MyPosts/MyPosts'
import AuthProvider from './components/Contexts/AuthContext'


function App() {

  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreatePost />} />
          <Route path="/posts/:id" element ={<UniquePost />} />
          <Route path="/edit/:id" element ={<EditPost />} />
          <Route path="/myPosts/:id" element ={<MyPosts />} />
          {/* <Route path="/signIn" element={<SignIn />} /> */}
        </Routes>
        <NavBar />
      </Router>     
      </AuthProvider>
    </>
  );
}

export default App;
