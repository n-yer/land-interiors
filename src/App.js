import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import IconSection from './components/IconSection/IconSection';
import Header from './components/Navbar/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <IconSection />
      <Services />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
