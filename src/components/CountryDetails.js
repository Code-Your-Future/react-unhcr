import React, { Component } from 'react';

class CountryDetails extends Component {
  render() {
    	const details = this.props.details;
    return (
    	<div className="app-country-statistics">
	  		<strong>Country: </strong>{details.country_of_residence_en}<br/>
	  		<strong>Year: </strong>{details.year}<br/>
	  		<strong>Female Refugees: </strong>{details.female_total_value}<br/>
	  		<strong>Male Refugees: </strong>{details.male_total_value}<br/>
		</div>
		);
  }
}

export default CountryDetails;