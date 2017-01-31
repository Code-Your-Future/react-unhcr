import React, { Component } from 'react';

class CountriesList extends Component {
 
  render() {
    const countries = this.props.countries;
    const defaultCountry=this.props.defalultValue;
    
    return ( 
    
        <select value={defaultCountry} onChange={this.onChnageHundler.bind(this)} >
            {
              countries.map((country, index) => {
                return(
                  <option value={country.country_of_residence} key={index}>
                    {country.country_of_residence_en}
                  </option>
                )
              })
            }
        </select> )
 }
 
  onChnageHundler(event){
    this.props.getCountryCode(event.target.value);
  }

}


export default CountriesList;
