//importación de modulos
import { Route } from 'react-router-dom'

//importación de componentes
import LadingPage from '../../DumbComponents/LadingPage/LadingPage.jsx'
import Home from '../../DumbComponents/Home/Home.jsx';
import DetailCountry from '../DetailCountry/DetailCountry.jsx';
import ShowActivities from '../ShowActivities/ShowActivities.jsx'
import CreateActivity from '../CreateActivity/CreateActivity.jsx'

//importación de styles
import './App.css'


function App() {
  return (
    <>
      <Route exact path='/' component={LadingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/country/:id' component={DetailCountry}></Route>
      <Route path='/activities' component={ShowActivities}></Route>
      <Route path='/activity' component={CreateActivity}></Route>
    </>
  );
}

export default App;
