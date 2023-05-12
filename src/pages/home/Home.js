import Header from '../../components/home/header/Header'
import Hero from '../../components/home/hero/Hero'
import CtaForm from '../../components/home/cta_form/CtaForm'
import Jumbotron from '../../components/home/jumbotron/Jumbotron'
import Accordion from '../../components/home/accordion/Accordion'
import Footer from '../../components/home/footer/Footer'


export default function Home() {
  return (
    <div className='home_page_container'>
      <div className="home_page_cards">
        <Header />
        <Hero>
          <CtaForm />
        </Hero>
        <Jumbotron />
        <Accordion>
          <CtaForm />
        </Accordion>
        <Footer />
      </div>
    </div>
  )
}
