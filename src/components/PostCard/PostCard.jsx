import { useState, useEffect } from 'react'
import { AiOutlineClockCircle, AiOutlineComment } from 'react-icons/ai'
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
                    <Link key={post.id} to={"/posts/" + post.id}>
                        <div className='container-card'>
                            <div className='upper'>
                                <div className="tag-and-author">
                                    <p className='p-tag body-squished'>{post.tags +"."}</p>
                                    <p className='grey-2 font-medium p-tag body-squished'>{"By " + post.author}</p>
                                </div>
                            </div>
                            <div className='flex-me'>
                                <div className='bottom-whole-left'>
                                    <div className='title-description'>
                                        <h6 className='dark-grey title-margin'>{post.title}</h6>
                                    </div>
                                    <div className='bottom-left'>
                                        <div className='div-name-and-info'>
                                            <div className='div-info'>
                                                <AiOutlineClockCircle className='icon-small' />
                                                <p className='caption-p'>{post.date}</p>
                                                <AiOutlineComment className='icon-small' />
                                                <p className='caption-p'>2 comments</p>
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
