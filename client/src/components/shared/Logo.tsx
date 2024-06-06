import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Logo = () => {

    return(

        <div style={ {

            display: "flex",
            marginRight: "auto",
            gap: "8px",
        } }
        >
            <Link to={ "/" }>
                <img src="Thuum_Logo.jpeg"
                    alt="openai"
                    width={ "75px" }
                    height={ "75px" }
                    className="company-logo"
                />
            </Link>{ " " }
            <Typography sx={ {

                display: {

                    md: "block",
                    sm: "none",
                    xs: "none",
                },
                mr: "auto",
                fontWeight: "800",
                textShadow: "2px 2px 20px #000",
            } }
            >
                <span style={ {

                    fontSize: "45px"
                    } }
                    className="company-name"
                >
                    huum
                </span>
            </Typography>
        </div>
    );
};


export default Logo;