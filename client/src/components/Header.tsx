import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import NavigationLink from "./shared/NavigationLink";
import { useAuth } from "../context/AuthContext";


const Header = () => {

    const auth = useAuth();

    return(

        <AppBar sx={ {

            bgcolor: "transparent",
            position: "static",
            boxShadow: "none",
        } }
        >
            <Toolbar sx= { { display: "flex" } }>
                <Logo />
                <div>
                    { auth?.isLoggedIn ? (

                        <>
                            <NavigationLink bg="#92ddc8"
                                to="chat"
                                text="Ir al chat"
                                textColor="black"
                            />
                            <NavigationLink bg="#385b7e"
                                to="/"
                                text="Cerrar sesión"
                                textColor="white"
                                onClick={ auth.logout }
                            />
                        </>
                    ) : (

                        <>
                            <NavigationLink bg="#1fe9ff"
                                to="/login"
                                text="Acceso"
                                textColor="black"
                            />
                            <NavigationLink bg="#1a8952"
                                to="/signup"
                                text="Registro"
                                textColor="white"
                            />
                        </>
                    ) }
                </div>
            </Toolbar>
        </AppBar>
    );
};


export default Header;