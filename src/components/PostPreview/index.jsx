import style from "./PostPreview.module.scss";
import { DateTime } from '../DateTime';

const PostPreview = (props) => {
    const data = props.data || {author: 'User', text: 'fdgkkghdfjh', date: new Date(), 
    photo: "https://images.unsplash.com/photo-1469334031218-e3…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }

    return (
        <article className={style.post}>
            <h3>{data.author}</h3>
            <DateTime data = {props.data}/>
            <p>{data.text}</p>
            { data.photo ? <img src={data.photo} alt={data.author}/> : <></>}
        </article>
    )
}

export default PostPreview;