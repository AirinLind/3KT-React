import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import { useRef } from 'react';

function App() {

  let headerRef = useRef()
  let footerRef = useRef()

  function autoScroll(target){
    target.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div>
      <h1>Магазин у дома</h1>
      <Header autoScroll={autoScroll} ref={{headerRef, footerRef}}/>
      <List/>
      <Footer autoScroll={autoScroll} ref={{headerRef, footerRef}}/>
    </div>
  );
}

export default App;
