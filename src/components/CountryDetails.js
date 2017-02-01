import React, { Component } from 'react';

class CountryDetails extends Component {
  render() {
    const data=this.props.data;
    const country=data.country_of_residence_en;
    const year=data.year;
    const femaleRefugees=data.female_total_value;
    const maleRefugees=data.male_total_value;
    return(
      <div>
        <strong>Country: </strong>{country}<br/>
        <strong>Year: </strong>{year}<br/>
        <strong>Female Refugees: </strong>{femaleRefugees}<br/>
        <strong>Male Refugees: </strong>{maleRefugees}<br/>
      </div>
    )
  }
}

export default CountryDetails;