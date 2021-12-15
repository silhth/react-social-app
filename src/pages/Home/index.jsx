import { useState } from "react";
import style from "./Home.module.scss"
import FriendPreview from "../../components/FriendPreview";
import MessagePreview from "../../components/MessagePreview";
import PostPreview from "../../components/PostPreview";

const friends = [
    {name: 'pippo', photo: 'https://randomuser.me/api/portraits/lego/6.jpg'},
    {name: 'ciro', photo: 'https://randomuser.me/api/portraits/lego/7.jpg'},
    {name: 'cinzia', photo: 'https://randomuser.me/api/portraits/lego/8.jpg'}
];

const messages = [
    { text: 'sfgdh', date: new Date(), sender: 'pippo'},
    { text: 'sdgh', date: new Date(), sender: 'pippo'},
    { text: 'truuh', date: new Date(), sender: 'pippo'},
    { text: 'strujhnb dh', date: new Date(), sender: 'pippo'},
    { text: 'sftghnb', date: new Date(), sender: 'pippo'},
]

const posts = [
    {author: 'User', text: 'fdgkkghdfjh', date: new Date(), photo: "" },
    {author: 'User', text: 'fdgkkghdfjh', date: new Date(), photo: "" },
    {author: 'User', text: 'fdgkkghdfjh', date: new Date(), photo: "" }

]
const Home = () => {

    const [friendsPreview /*, setFriendsPreview*/] = useState(friends);
    const [allPosts /*, setAllPosts*/] = useState(posts);
    const [messagesPreview /*, setMessages*/] = useState(messages);



    return (
        <section className={style.home}>
            <h3>Home page</h3>
            <div className={style.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => 
                    (<FriendPreview key={index} data={friend}/>))}
                </aside>
                <main>
                {allPosts.map((post, index) => 
                (<PostPreview key={index} data={post}/>)
                )}
                </main>
                <aside>
                {messagesPreview.map((message, index) =>
                (<MessagePreview key={index} data={message}/>))}
                    
                </aside>
            </div>
        </section>
    )
}

export default Home; 