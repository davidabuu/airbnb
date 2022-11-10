import "../styles/globals.css"
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
    return (
        //The intializeOnMount is to hoo up to a server and have other funtions, but it is not needed
        // <MoralisProvider initializeOnMount={false}>
        //     <NotificationProvider>
                <Component {...pageProps} />
        //     </NotificationProvider>
        // </MoralisProvider>
    )
}

 export default MyApp
// import React from 'react';
// import { MoralisProvider, NoMoralisContextProviderError } from 'react-moralis';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//     return (
//         <NoMoralisContextProviderError>
//         <MoralisProvider
//             appId="appId"
//             serverUrl="serverUrl"
//         >
//             <NotificationProvider>
//             <Component {...pageProps} />
//             </NotificationProvider>
//         </MoralisProvider>
//         </NoMoralisContextProviderError>
//     );
// }

// export default MyApp;