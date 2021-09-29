import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Router
} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
          <Header />
          <Footer />
      </div>
    </Router>
    
  );
}

export default App;
