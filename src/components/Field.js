import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";



const Field = () => {

    const context = useContext(LanguageContext);
    const text = context === 'english' ? 'Name' : 'Nombre'

  return (
    <div className="ui field">
        <label>{text}</label>  
        <input />  
    </div>
  )
}

export default Field