import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ContextChallenges'

function MyApp({ Component, pageProps }) {
  return(
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  ) 
}

export default MyApp
