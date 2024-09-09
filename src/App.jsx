import './App.css'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Title from './components/title/Title'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Services' title='What We Offer'/>
         <Services />
      
      <About />
      <Title subtitle='Testimonials' title='What Our Clients Says'/>
      <Testimonials />
      <Title subtitle='Contact Us' title='Get In Touch'/>
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
