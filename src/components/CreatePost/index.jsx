import style from "./CreatePost.module.scss";
import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http"
import { Modale } from "../../components/Modale";




const CreatePost = () => {

    const [authorInput, setAuthorInput] = useState("");
    const [imgInput, setImgInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [formPost, setFormPost] = useState({});
    const [show, setShow] = useState(false)



    const handleAuthorInput = (event) => setAuthorInput(event.target.value)
    const handleImgInput = (event) => setImgInput(event.target.value)
    const handleMessageInput = (event) => setMessageInput(event.target.value)
    const handleBtn = (event) => {
        event.preventDefault();
        setShow(true)
        setTimeout(() => { setShow(false) }, 2500);
        httpPOST("posts", formPost);
    };


    useEffect(() => {
        setFormPost({
            author: authorInput,
            text: messageInput,
            date: new Date().toISOString(),
            photo: imgInput,
        });
    }, [authorInput, imgInput, messageInput]);

    return (
        <div className={style.createPostModale}>
            <Modale data={formPost} show={show} style="rgb(69, 184, 255)"/>
            <div className={style.createPost}>
                
                <form>

                    <div className={style.__author}>
                        <input
                            value={authorInput}
                            onChange={handleAuthorInput}
                            name="author"
                            id="author"
                            type="text"
                            placeholder="Author"
                            required />

                        <input
                            value={imgInput}
                            onChange={handleImgInput}
                            name="img"
                            id="img"
                            type="text"
                            placeholder="url img" />

                        <button type="submit" onClick={handleBtn}>SEND</button>

                    </div>

                    <textarea
                        value={messageInput}
                        onChange={handleMessageInput}
                        name="text"
                        type="text"
                        placeholder="Text" />



                </form>

            </div>
        </div>
    )
}

export { CreatePost }