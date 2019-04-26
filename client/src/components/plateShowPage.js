import React, {Component} from 'react';
import Menu from '../containers/menu';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import '../css/menu.css';
import '../css/footer.css';
import '../css/plates.css';

class PlateShowPage extends Component {  

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <NavBar/>
        </header>
        <section className="container">
          <div className='show-plate'>
            <div>yo</div>
          </div>
          <Menu/>
        </section>
        <footer id='footer'>
          <Footer/>
        </footer>
      </React.Fragment>
    )
  }
}

export default PlateShowPage