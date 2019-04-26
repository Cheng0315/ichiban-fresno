import React, {Component} from 'react';
import { connect } from 'react-redux';
import Menu from '../containers/menu';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import '../css/menu.css';
import '../css/footer.css';
import '../css/plates.css';

class PlateShowPage extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      plate: ''
    }
  }

  componentDidMount() {
    const plateId = this.props.match.params.id;
    
    fetch(`/api/plates/${plateId}`)
    .then(response => response.json())
    .then(plateData => 
      this.setState({
        plate: plateData
      }))
    .catch(error => console.log(error))
  }
 
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <NavBar/>
        </header>
        <section className="container">
          <div className='show-plate'>
            <img src={this.state.plate.image_url}/>
          </div>
        </section>
        <footer id='footer'>
          <Footer/>
        </footer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  plates: state.plates.plates
})

export default connect(mapStateToProps)(PlateShowPage)