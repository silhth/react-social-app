import style from "./CreatePost.module.scss";
import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http"



const CreatePost = () => {

    const [authorInput, setAuthorInput] = useState("");
    const [imgInput, setImgInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [formPost, setFormPost] = useState({});
    


    const handleAuthorInput = (event) => setAuthorInput(event.target.value)
    const handleImgInput = (event) => setImgInput(event.target.value)
    const handleMessageInput = (event) => setMessageInput(event.target.value)
    const handleBtn = (event) => {
        event.preventDefault();
        httpPOST("posts", formPost);
        alert("fatto")};
    

    useEffect(() => {
        setFormPost({
            author: authorInput,
            text: messageInput,
            date: new Date().toISOString(),
            photo: imgInput,
        });
    }, [authorInput, imgInput, messageInput]);

    return (
        <div className={style.createPost}>
            <form>
                <div className={style.__author}>
                <input 
                value= {authorInput}
                onChange={handleAuthorInput}
                name="author" 
                id="author" 
                type= "text" 
                placeholder="Author" 
                required/>

                <input 
                value= {imgInput}
                onChange={handleImgInput}
                name="img" 
                id="img" 
                type= "text" 
                placeholder="url img"/>

                <button type="submit" onClick={handleBtn}>SEND</button>
                </div>

                <textarea 
                value= {messageInput}
                onChange={handleMessageInput}
                name="text" 
                type= "text" 
                placeholder="Text"/>

                
            </form>

        </div>
    )
}

export {CreatePost}