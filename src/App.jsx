import './App.css';
import NavBar from './components/NavBar'
import Welcome from './pages/Welcome/Welcome';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Brief from './pages/Brief/Brief';
import History from './pages/History/History';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  

  return (
    <>
      <NavBar />
      <Welcome />
      <ScrollToTop/>
      <Services />
      <Products />
      <Brief />
      <History />
      <Contact />
      <Footer />
    </>
  )
}

export default App
