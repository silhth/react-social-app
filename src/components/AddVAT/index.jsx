import style from "./AddVAT.module.scss"

const AddVAT = ({price, vat}) => {

    const calcVat = (NumOne, Numtwo) =>  NumOne * (1+ Numtwo)
      
    return (
      
        <div className={style.priceVAT}>
            <p>Price</p>
            <p>{calcVat(price, vat)}$</p> 
        </div>          
        
    );
  };
  
  export default AddVAT;