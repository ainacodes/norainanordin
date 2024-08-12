import Header from './components/Header';
import Hero from './components/Hero';
import MyClients from './components/MyClients';
import Services from './components/Services';
import MyProjects from './components/MyProjects';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main data-theme="pastel" className="text-gray-700">
      <Header />
      <Hero />
      <MyClients />
      <Services />
      <MyProjects />
      <ContactForm />
      <Footer />
    </main>
  );
}
