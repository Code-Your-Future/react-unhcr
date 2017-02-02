import React, { Component } from 'react';
// import fetch from 'fetch';
import logo from './images/cyf.png';
import './styles/App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import YearsList from './components/YearsList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      countryData: {},
      yearsList:[],
      country: null,
      year:null
    }
  }
  setCountry = (event) => {
    if(event.target.value === '-1') return ;
    this.setState({country:event.target.value});
    // console.log(this.state.event)
  }
  setYear = (event) => {
    if(event.target.value === '-1') return ;
    this.setState({year:event.target.value});
  }
  onSubmittion = () => {
    (this.state.country && this.state.year) ? this.getCountryStatistics(this.state.country, this.state.year):this.setState({countryData:false})
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
            <CountriesList countries={this.state.countriesList} whenChange={this.setCountry} />
          </div>
          <div>
            <YearsList years={this.state.yearsList} whenChange={this.setYear} />
          </div>
          <div>
            <button onClick={this.onSubmittion} type="submit">Retrieve Country statistics</button>
          </div>
        </div>
        <div className="app-country-statistics">
        {this.state.countryData ? <CountryDetails data={this.state.countryData} /> : <p>select country and year</p>}
        </div>
      </div>
    );
  }
  componentDidMount() {
      this.getCountriesList();
      this.getYears();
      // this.getCountryStatistics('TUR', '2013');
  }
  getCountriesList() {
    fetch('http://data.unhcr.org/api/stats/country_of_residence.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ countriesList: data } );
      });
  }
  getYears() {
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
