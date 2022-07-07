//importación de modulos
import { Route } from 'react-router-dom'

//importación de componentes
import LadingPage from '../../DumbComponents/LadingPage/LadingPage.jsx'
import Home from '../../DumbComponents/Home/Home.jsx';

//importación de styles
import './App.css'


function App() {
  return (
    <>
      <Route exact path='/' component={LadingPage}/>
      <Route exact path='/home' component={Home}/>
    </>
  );
}

export default App;
