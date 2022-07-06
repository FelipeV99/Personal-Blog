import { useState, useEffect } from 'react'
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineEllipsis } from 'react-icons/ai'
import './postcard.css'
import { db } from '../../firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    const [posts, setPosts] = useState([])
    //we get the posts collection using the db we configured
    const postsCollectionRef = collection(db, "posts")
    //useEffect that only renders once, notice the []
    //also, you can't use async in the anonimous function, that's why we create
    //another function inside the anonimous funciton
    useEffect(() => {
        const getPosts = async () => {
            //get all docs from the collection that we referenced before
            //however, it returns a bunch of data we don't need
            const data = await getDocs(postsCollectionRef)
            //here, we pick only the properies and values that we need from the collection
            setPosts(data.docs.map((doc) => ({
                //using the spred to mix properties and values inside doc.data() with id:doc.id
                ...doc.data(), id: doc.id
            })
            ))
        }
        getPosts()
    }, [])

    return (
        <>
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

export default PostCard
