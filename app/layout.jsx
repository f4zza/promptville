    import '@styles/globals.css';
    import Nav from "@components/Nav";
    import Provider from "@components/Provider"



    export const metadata = {   
        title: "Promptville",
        description: 'Discover and Share AI Prompts.'
    }
    
    const RootLayout = ({children}) => {
      return (
        <html lang='en'>
            <body>
                <provider>
                <div className='main'>
                    <div className='gradient' />    
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
                </provider>
            </body>
        </html>
      )
    }
    
    export default RootLayout