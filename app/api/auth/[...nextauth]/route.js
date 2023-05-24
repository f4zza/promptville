import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

import { connectToDB} from '@utils/database'



const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
        })
    ],
        async session({session}){

        },
        async signIn({ profile }){
            try {
                await connectToDB()
            } catch (error) {
                
            }
        }
})

export {handler as GET, handler as POST};
