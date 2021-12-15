
// import style from "./MessagePreview.module.scss"

const MessagePreview = (props) => {

    const data = props.data || { text: 'sfgdh', date: new Date(), sender: 'pippo'};

    return (
         <div>
             <h5>{data.sender}</h5>
             <p>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</p>
             <p>{data.text}</p>

         </div>
    )
}

export default MessagePreview;