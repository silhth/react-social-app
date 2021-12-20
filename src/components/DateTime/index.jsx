import { formatDistance } from 'date-fns';
import { it } from 'date-fns/locale'


const DateTime = (props) => {

    const data = props.data || { date: new Date()};
    const createDate = (date) => new Date(data.date);
    return(
        <p><small>
        {formatDistance(new Date(data.date), new Date(), { addSuffix: true, locale: it })} - {' '} 
        {createDate(data.date).toLocaleTimeString()}  
         </small></p> 
    )
}

export { DateTime}
   
