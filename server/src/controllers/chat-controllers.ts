import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";

import {
    OpenAIApi,
    ChatCompletionRequestMessage
} from "openai";

import {
    NextFunction,
    Request,
    Response
} from "express";


export const generateChatCompletion = async ( req: Request, res: Response, next: NextFunction ) => {

    const { message } = req.body;

    try {
        const user = await User.findById(res.locals.jwtData.id);

            if( !user ) {

                return res
                    .status( 401 )
                    .json( { message: "User not registred or token malfunctioned" } );
            }

            // Grab chats of user
            const chats = user.chats.map( ( { role, content } ) => ( {
                role,
                content
            } ) ) as ChatCompletionRequestMessage[];

            chats.push( { content: message, role: "user" } );

            user.chats.push( { content: message, role: "user" } );

            // Send all chats with new one to OpenAI API
            const config = configureOpenAI();
            const openai = new OpenAIApi( config );

            const chatResponse = await openai.createChatCompletion( {
                model: "gpt-3.5-turbo",
                messages: chats,
            } );

            user.chats.push( chatResponse.data.choices[ 0 ].message );

            await user.save();
            
            return res.status( 200 ).json( { chats: user.chats } );

    } catch( error ) {
        
        console.log( error );
        
        return res.status( 500 ).json( { message: "Something went wrong" } );
    }
};


export const sendChatsToUser = async ( req: Request, res: Response, next: NextFunction ) => {

    try {

        // User token check
        const user = await User.findById( res.locals.jwtData.id );

        if( !user ) {

            return res.status( 401 ).send( "User not registered or token malfunctioned" );
        }

        if( user._id.toString() !== res.locals.jwtData.id ) {

            return res.status( 401 ).send( "Permissions didn't match" );
        }

        return res
            .status( 200 )
            .json( {

                message: "OK",
                chats: user.chats
            } );

    } catch( error ) {

        console.log( error );

        return res.status( 200 ).json( { message: "ERROR", cause: error.message } );
    }
};


export const deleteChats = async ( req: Request, res: Response, next: NextFunction ) => {

    try {

        // User token check
        const user = await User.findById( res.locals.jwtData.id );

        if( !user ) {

            return res.status( 401 ).send( "User not registered or token malfunctioned" );
        }

        if( user._id.toString() !== res.locals.jwtData.id ) {

            return res.status( 401 ).send( "Permissions didn't match" );
        }

        //@ts-ignore
        user.chats = [];

        await user.save();

        return res.status( 200 ).json( { message: "OK" } );

    } catch( error ) {

        console.log( error );

        return res.status( 200 ).json( { message: "ERROR", cause: error.message } );
    }
};