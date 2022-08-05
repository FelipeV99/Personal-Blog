import { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './search.css'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom';


const Search = (props) => {
    const [posts, setPosts] = useState([])
    const [queryPosts, setQueryPosts] = useState([])
    const postsCollectionRef = collection(db, "posts");

    const navigation = useNavigate()

    const q = query(postsCollectionRef, where("tags", "==", "Economy"));
    useEffect(
        () => {
            const getQuery = async () => {
                onSnapshot(q, (snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        // console.log("data", doc.data(), typeof (doc.data()))
                        let postObj = doc.data()
                        postObj['id'] = doc.id

                        setQueryPosts(postObj)
                    })
                })
            }
            getQuery()
        }, [])
    console.log(queryPosts)

    const getReal = () =>{
        console.log("yes")
    }


    

    if (props.open)
    return (ReactDom.createPortal(
        <>
        <div className='modal-style'>
            <div className="overlay-style">
                <input type="text" placeholder='type something' />
                <p onClick={props.close}>close</p>
                <div onClick={()=>{navigation("/posts/" + queryPosts.id)}}>
                <p onClick={props.close}>{queryPosts.title}</p>
                </div>

            </div>
        </div>
        </>
        ,document.getElementById('portal')
    ))
    
  
}

export default Search