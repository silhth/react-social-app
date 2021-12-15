
import style from "./FriendPreview.module.scss"

const FriendPreview = (props) => {
    const data = props.data || {name:"Friend", photo: "https://randomuser.me/api/portraits/lego/9.jpg"};

    return (
        <div className={style.friend}>
            <img src={data.photo} alt={data.name} />
            <p>{data.name}</p>
        </div>
    )
}


export default FriendPreview;