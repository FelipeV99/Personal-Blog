import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineEllipsis } from 'react-icons/ai'
import { db } from '../../firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";

const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const params = useParams()

    useEffect(()=>{
      const getPosts = async()=>{
        const postsCollectionRef = collection(db, "posts")
        const q = query(postsCollectionRef, where("authorId","==",params.id))
        const data = await getDocs(q)
        setPosts(data.docs.map((doc)=>({
          ...doc.data(), id:doc.id
        })))
      }
      getPosts()
    },[])

    console.log(posts)
    return (
        <>
        <h5>My Posts</h5>
            {posts.map((post) => {
                return (
                    <Link key={post.id} to={"/latest-posts/" + post.id}>
                        <div className='container-card'>

                            <div className="tag-and-options">
                                <p className='p-tag'>{post.tags}</p>
                                <AiOutlineEllipsis size="20" />
                            </div>
                            <div className='flex-me'>
                                <div className='bottom-whole-left'>
                                    <div className='title-description'>
                                        <h6 className='dark-grey'>{post.title}</h6>
                                        <p className='body-squished grey-2'>{post.content.substring(0, 66)}...</p>
                                    </div>
                                    <div className='bottom-left'>
                                        <div className='div-profile-img'>
                                            <img className='profile-img' src={post.profileImage} alt="Author" />
                                        </div>
                                        <div className='div-name-and-info'>
                                            <p className='body-squished grey-2 font-medium'>{post.author}</p>
                                            <div className='div-info'>

                                                <AiOutlineClockCircle className='icon-small' />


                                                <p className='caption-p body-squished'>{post.date}</p>
                                                <AiOutlineComment className='icon-small' />
                                                <p className='caption-p body-squished'>2 comments</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className='img-div'>
                                    <img className='post-img' src={post.postImage} alt="Author" />
                                </div>
                            </div>
                        </div>
                    </Link>)
            })}


        </>
    )
}

export default MyPosts