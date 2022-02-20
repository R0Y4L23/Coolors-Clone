import '../styles/globals.css'
import 'react-notifications/lib/notifications.css';
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return <><Navbar /><Component {...pageProps} /></>
}

export default MyApp
