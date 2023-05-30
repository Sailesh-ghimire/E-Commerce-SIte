import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    
<Navbar home="home" about = "abutus" contact="contact"/>
<Landing/>
<Footer/>
    </>
  );
}

export default App;
