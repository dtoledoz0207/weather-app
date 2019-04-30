import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
//import logo from './logo.svg';
import './App.css';

const cities = [
  "Colima,mx",
  "Bogota,col",
  "Toledo,es",
  "Washington,us",
  "Guadalajara,mx",
  "Los Angeles,us"
];

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    this.setState({city: city});
    console.log(`handleSelectedLocation: ${city}`);
  };

  render() {

    const {city} = this.state;

    return (

      <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid>
        {/*<Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>*/}
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city === null ? <h1>No se seleccionó ciudad</h1> : <ForecastExtended city={city}/>}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      </div>  
    );
  }
}

export default App;
