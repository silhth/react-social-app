import { useState } from "react";
import style from "./PostPreview.module.scss";
import { DateTime } from '../DateTime';
import { Modale } from "../../components/Modale";

import { httpDELETE } from '../../libs/http'

const PostPreview = (props) => {
    const data = props.data || {
        author: 'User', text: 'fdgkkghdfjh', date: new Date(),
        photo: "https://images.unsplash.com/photo-1469334031218-e3…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
    const [show, setShow] = useState(false)

    const handleDeletePost = () => {
        httpDELETE(`posts/${props.data.id}`).then(() => { });
        setShow(true);
        window.location.href = "/";
    }

    return (
        <article className={style.post}>
            <Modale data={data.text} show={show} style="red" />
            <button onClick={handleDeletePost}>X</button>
            <h3>{data.author}</h3>
            <DateTime data={props.data} />
            <p>{data.text}</p>
            {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
        </article>
    )
}

export default PostPreview;