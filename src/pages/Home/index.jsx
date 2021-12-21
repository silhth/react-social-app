import { useState, useEffect } from "react";
import { http } from "../../libs/http";
import { Link } from "react-router-dom";
import style from "./Home.module.scss"
import FriendPreview from "../../components/FriendPreview";
import MessagePreview from "../../components/MessagePreview";
import PostPreview from "../../components/PostPreview";



const friends = [];

const messages = []

const posts = []

const Home = () => {

    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessages] = useState(messages);


    // fa si che la funzione abbia un life cycle  
    useEffect(() => {

        http('friends?_limit=4').then((data) => setFriendsPreview(data));
        http('messages?_limit=4').then((data) => setMessages(data));
        http('posts').then((data) => setAllPosts(data.reverse()));


        //per caricare tutti json insieme usare promise all 
        // Promise.all([http('friends?_limit=4'),  http('messages?_limit=4'), http('posts')]).then((data) => console.log(data))
    }, []);


    return (
        <section className={style.home}>
            <h3>Home page</h3>
            <div className={style.grid}>
                <aside>
                    {friendsPreview.map((friend, index) =>
                        (<FriendPreview key={index} data={friend} />))}
                </aside>
                <main>

                    <Link to="/new-post">
                        <button className={style.createPostBtn}>
                            + Create a new post!
                        </button>
                    </Link>
                    {allPosts.map((post, index) =>
                        (<PostPreview key={index} data={post} />)
                    )}
                </main>
                <aside>
                    {messagesPreview.map((message, index) =>
                        (<MessagePreview key={index} data={message} />))}

                </aside>
            </div>
        </section>
    )
}

export default Home; 