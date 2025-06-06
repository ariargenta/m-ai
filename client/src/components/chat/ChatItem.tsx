import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
    Box,
    Avatar,
    Typography
} from "@mui/material";


function extractCodeFromString( message: string ) {

    if( message.includes( "```" ) ) {

        const blocks = message.split( "```" );

        return blocks;
    }
}


function isCodeBlock( str: string ) {

    if(
        
        str.includes( "=" ) ||
        str.includes( ";" ) ||
        str.includes( "[" ) ||
        str.includes( "]" ) ||
        str.includes( "{" ) ||
        str.includes( "}" ) ||
        str.includes( "#" ) ||
        str.includes( "//" )
    ) {
        return true;
    }

    return false;
}


const ChatItem = ( { content, role } : { content: string, role: "user" | "assistant" } ) => {

    const messageBlocks = extractCodeFromString( content );

    const auth = useAuth();

    return role == "assistant" ? (

        <Box sx={ {

            display: "flex",
            p: 2,
            bgcolor: "#1a8952",
            my: 2,
            gap: 2,
            borderRadius: 2,
            my: 1,
        } }
        >
            <Avatar sx={ { ml: "0" } }>
                <img src="Thuum_Logo.jpeg" alt="openai" width={ "40px" } />
            </Avatar>
            <Box>
                { !messageBlocks && (

                    <Typography sx={ { fontSize: "20px" } }>
                        { content }
                    </Typography>
                ) }
                { messageBlocks && messageBlocks.length && messageBlocks.map( ( block ) =>

                    isCodeBlock( block ) ? (

                        <SyntaxHighlighter style={ coldarkDark }
                            language="javascript"
                        >
                            { block }
                        </SyntaxHighlighter> 
                        ) : (
                        <Typography sx={ { fontSize: "20px" } }>
                            { block }
                        </Typography>
                ) ) }
            </Box>
        </Box>
    ) : (
        <Box sx={ {

            display: "flex",
            p: 2,
            bgcolor: "#0a3a2a",
            gap: 2,
            borderRadius: 2,
        } }
        >
            <Avatar sx={ { ml: "0", bgcolor: "black", color: "white" } }>
                { auth?.user?.name[ 0 ] }
                { auth?.user?.name.split( " " )[ 1 ][ 0 ] }
            </Avatar>
            <Box>
                { !messageBlocks && (
                    
                    <Typography sx={ { fontSize: "20px" } }>
                        { content }
                    </Typography>
                ) }
                { messageBlocks && messageBlocks.length && messageBlocks.map( ( block ) =>

                    isCodeBlock( block ) ? (

                        <SyntaxHighlighter style={ coldarkDark }
                            language="javascript"
                        >
                            { block }
                        </SyntaxHighlighter> 
                        ) : (
                        <Typography sx={ { fontSize: "20px" } }>
                            { block }
                        </Typography>
                ) ) }
            </Box>
        </Box>
    );
};


export default ChatItem;