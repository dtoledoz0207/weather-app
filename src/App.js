import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainerConnected from './containers/LocationListContainer';
import ForecastExtendedContainerConnected from './containers/ForecastExtendedContainer';
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

  render() {

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
            <LocationListContainerConnected cities={cities}></LocationListContainerConnected>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainerConnected></ForecastExtendedContainerConnected>
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