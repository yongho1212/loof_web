
import './App.css';
import HeaderBar from './components/headerbar';
import ContactForm from './components/contact';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <header className="App-header">
        <Main/>
       
        
        <footer>
          <p>
            this is footer
          </p>
        </footer>
      </header>
  
      <ContactForm/>
    </div>
  );
}

export default App;
