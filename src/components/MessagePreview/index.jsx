
// import style from "./MessagePreview.module.scss"
import { DateTime } from '../DateTime';


const MessagePreview = (props) => {

    const data = props.data || { text: 'sfgdh', date: new Date(), sender: 'pippo'};
    

    return (
         <div>
             <h5>{data.sender}</h5>            
             <DateTime data = {props.data}/>
             <p>{data.text}</p>

         </div>
    )
}

export default MessagePreview;