import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Arif Selim Kayımoğlu - DevOps Engineer</title>
        <meta 
          name="description" 
          content="DevOps Engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Experiences />
        
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
