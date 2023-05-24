import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

import { connectToDB} from '@utils/database'
import User from '@models/user'



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

                //check if the user already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
                //create if not
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
})

export {handler as GET, handler as POST};
