import Home from './components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost'
import UniquePost from './components/UniquePost/UniquePost'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EditPost from './components/EditPost/EditPost'
import { db } from './firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'
import { createContext, useEffect, useState } from "react";
import MyPosts from './components/MyPosts/MyPosts'

export const postsContext = createContext(null)


function App() {

  const [posts, setPosts] = useState([])
  const postsCollectionRef = collection(db, "posts")
  useEffect(()=>{
    const getPosts = async()=>{
      const data = await getDocs(postsCollectionRef)
      setPosts(data.docs.map((doc)=>({
        ...doc.data(), id:doc.id
      })))
    }
    getPosts()
  },[])

  return (
    <>
    <postsContext.Provider value={{posts}}>
      <Router>
        {/* <NavBar /> */}
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
      </postsContext.Provider>
    </>
  );
}

export default App;
