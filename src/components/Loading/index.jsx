import style from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={style.loading}>
            <img src="https://img.icons8.com/ios-filled/100/000000/loading-sign.png" alt="loading" />
            <div>Please wait Content Loading...</div>
        </div>
    )
}
export default Loading;
