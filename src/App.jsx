import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
