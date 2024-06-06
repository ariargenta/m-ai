import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

import {
    Box,
    useMediaQuery,
    useTheme
} from "@mui/material";


const Home = () => {

    const theme = useTheme();
    const isBelowMd = useMediaQuery( theme.breakpoints.down( "md" ) );

    return(

        <Box width={ "100%" }
            height={ "100%" }
        >
            <Box sx={ {

                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                mx: "auto",
                mt: 3,
            } }
            >
                <Box>
                    <TypingAnim />
                </Box>
                <Box sx={ {

                    width: "100%",
                    display: "flex",
                    flexDirection: {

                        md: "raw",
                        xs: "column",
                        sm: "column",
                    },
                    gap: 5,
                    my: 10,
                } }
                >
                    <img src="robot-headset.png"
                        alt="robot"
                        style={ {

                            width: "200px",
                            margin: "auto",
                        } }
                    />
                    <img className="image-inverted rotate"
                        src="openai.svg"
                        alt="openai"
                        style={ {

                            width: "200px",
                            margin: "auto",
                        }}
                    />
                    <Box sx={ {

                        display: "flex",
                        mx: "auto"
                    } }
                    >
                        <img src="chatbot-messenger.jpg"
                            alt="chatbot"
                            style={ {

                                display: "flex",
                                margin: "auto",
                                width: isBelowMd ? "80%" : "60%",
                                borderRadius: 20,
                                boxShadow: ".5px .5px 105px #64f3d5",
                                marginTop: 20,
                                marginBottom: 20,
                                padding: 10,
                            } }
                        />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};


export default Home;