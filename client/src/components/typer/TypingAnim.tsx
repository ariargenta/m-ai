import { TypeAnimation } from "react-type-animation";


const TypingAnim = () => {

    return(

        <TypeAnimation sequence={ [
            
            "Habla con tu propia IA",
            2000,
            "Construida a medida para ti",
            2000,
            "Tu propio chatbot personalizado",
            2000,
            ] }
            speed={ 50 }
            style={ {

                fontSize: "60px",
                color: "white",
                display: "inline-block",
                textShadow: "1px 1px 20px #000",
            } }
            repeat={ Infinity }
        />
    );
};


export default TypingAnim;