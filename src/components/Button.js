import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const Button = () => {
	//CON HOOK USECONTECT
	/*     const context = useContext(LanguageContext)

    const text = context === 'english' ? 'Submit' : 'Aceptar'
	return (
			<button className='ui primary button'>{text}</button>
	); */

	//CON CONSUMER
	return (
		<ColorContext.Consumer>
			{(color) => (
				<button className={`ui button ${color}`}>
					<LanguageContext.Consumer>
						{(value) => (value === "english" ? "Submit" : "Aceptar")}
					</LanguageContext.Consumer>
				</button>
			)}
		</ColorContext.Consumer>
	);
};

export default Button;
