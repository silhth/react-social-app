import style from "./PostPreview.module.scss"

const PostPreview = (props) => {
    const data = props.data || {author: 'User', text: 'fdgkkghdfjh', date: new Date(), 
    photo: "https://images.unsplash.com/photo-1469334031218-e3…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }

    return (
        <article className={style.post}>
            <h3>{data.author}</h3>
            <p><small>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</small></p>
            <p>{data.text}</p>
            { data.photo ? <img src={data.photo} alt={data.author}/> : <></>}
        </article>
    )
}

export default PostPreview;