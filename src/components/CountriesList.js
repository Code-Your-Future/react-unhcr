import React, { Component } from 'react';

class CountriesList extends Component {

  constructor(){
    super();
    this.onChnageHundler=this.onChnageHundler.bind(this);
  }
  
  onChnageHundler(event){
    this.props.getCountryCode(event.target.value);
  }

  render() {
    const countries = this.props.countries;
    const defaultV=this.props.defalultValue;
    return (<select value={defaultV} onChange={this.onChnageHundler} >
      {
        countries.map((country, index) => {
          return(
            <option value={country.country_of_residence} key={index}>
              {country.country_of_residence_en}
            </option>
          )
        })
      }
    </select>)
  }
}


export default CountriesList;
