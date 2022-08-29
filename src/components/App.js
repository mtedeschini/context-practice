import { useState } from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
	const [lenguage, setLenguage] = useState("english");

	return (
		<div className="ui container">
			<div>
				Select a language:
				<i className="flag us" onClick={() => setLenguage("english")} />
				<i className="flag es" onClick={() => setLenguage("spanish")} />
			</div>
			<LanguageContext.Provider value={lenguage}>
				<ColorContext.Provider value ='red'>
					<UserCreate />
				</ColorContext.Provider>
			</LanguageContext.Provider>
		</div>
	);
};

export default App;
