
import './App.css';
import Home from './components/Home';
//ana sayfa burası 

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>ece</h1>
      </header>
      <Homr data="ece"></Homr>
      <Home></Home>
    </div>);
}

export default App;


const Homr =(props)=>{

  return(
    <h1 className='footer'>{props.data}</h1>
    );
}