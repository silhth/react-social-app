import styles from './Modale.module.scss'


const Modale = (props) => {

    const data = props.data || {}
    let text = '';
 
    if(!props.show) {
        return null
    }
    if(props.style === "rgb(69, 184, 255)"){
        text = `your post "${data.text}" was added`
    }
    if(props.style === "red"){
        text = `your post "${data.text}" was deleted`
    }

    return(
      
        <div className={styles.modale} style={{background: props.style}}>
            <p>{text}</p>
        </div>

    )
}

export { Modale }