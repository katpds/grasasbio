import logo from './logo.svg';
import './App.css';
import AboutUs from './presentation/components/aboutUs/aboutUs';
import Services from './presentation/components/services/services';
import NavBar from './presentation/components/navBar/navBar';
import Footer from './presentation/components/footer/footer';

function App() {
  return (
    <div className="App">
        <header></header>
        < NavBar/>
        < AboutUs/>
        < Services/>
        <Footer />
    </div>
  );
}

export default App;
