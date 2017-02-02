import React, { Component } from 'react';
// import fetch from 'fetch';
import logo from './images/cyf.png';
import './styles/App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import YearsList from './components/YearsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      countryData: {},
      yearsList: []
      //selectedYear:null,
      //selectedCountry:null
    }
  }
  onCountryChange = (event)=> {
    if(event.target.value === '-1') return;
    this.setState({
      selectedCountry: event.target.value});
  }
  onYearChange = (event) => {
    if(event.target.value === '-1') return;
    this.setState({
      selectedYear: event.target.value});
  }
  onSubmitCountry = ()=> {
    this.getCountryStatistics(this.state.selectedCountry, this.state.selectedYear);
  }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>UNHCR Data Browser</h2>
        </div>
        <div className="app-search-box">
          <div>
            <CountriesList countries={this.state.countriesList} onCountryChange={this.onCountryChange}/>
            <YearsList years={this.state.yearsList} onYearChange={this.onYearChange}/>
          </div>
          <div>
            <button onClick={this.onSubmitCountry} type="submit">Retrieve Country statistics</button>
          </div>
          </div>
            <CountryDetails 
              details={this.state.countryData}
            />
      </div>
    );
  }
  componentDidMount() {
      this.getCountriesList();
      this.getCountryStatistics('TUR', '2013');
      this.getYearsList();
  }
  getCountriesList() {
    fetch('http://data.unhcr.org/api/stats/country_of_residence.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ countriesList: data } );
      });
  }
  getYearsList() {
    fetch('http://data.unhcr.org/api/stats/time_series_years.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ yearsList: data } );
      });
  }
  getCountryStatistics(countryCode, year) {
    const url = 'http://data.unhcr.org/api/stats/demographics.json?country_of_residence=' + countryCode + '&year=' + year;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //The data comes back as an array, we take the first element of the array as it contains our country data
      this.setState({ countryData: data[0]})
    })
  }
}

export default App;
