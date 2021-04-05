import './App.css';
import { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import QuestionIndexPage from './components/QuestionIndexPage';
import Navbar from './components/Navbar';


class App extends Component {
  constructor(props) {
    super(props);
  };




  render(){
    return(
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={QuestionIndexPage}/>
          </Switch>
        </BrowserRouter>

    )
  }
}

export default App;