import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import MechanismReveal from './components/MechanismReveal';
import Differentiation from './components/Differentiation';
import SocialProof from './components/SocialProof';
import Deliverables from './components/Deliverables';
import ForWhom from './components/ForWhom';
import AboutAuthor from './components/AboutAuthor';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main>
        <Hero />
        <ProblemAgitation />
        <MechanismReveal />
        <Differentiation />
        <SocialProof />
        <Deliverables />
        <ForWhom />
        <AboutAuthor />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
