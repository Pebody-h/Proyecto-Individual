//importación de modulos
import { Route } from 'react-router-dom'

//importación de componentes
import LadingPage from '../../DumbComponents/LadingPage/LadingPage.jsx'

//importación de styles
import './App.css'


function App() {
  return (
    <>
      <Route exact path='/' component={LadingPage}/>
    </>
  );
}

export default App;
