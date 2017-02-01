import React from 'react';

class CountryDetails extends React.Component{

	
	render(){

		const demographic=this.props.CountryDetail;	
			
		return(
			<div className="app-country-statistics">
				<strong>Country: </strong>{demographic.country_of_residence_en}<br/>
				<strong>Year: </strong>{demographic.year}<br/>
				<strong>Female Refugees: </strong>{demographic.female_total_value}<br/>
				<strong>Male Refugees: </strong>{demographic.male_total_value}<br/>
				<strong>Total: </strong>{this.sum(demographic.female_total_value,demographic.male_total_value)}
			</div>
		);

		sum=(numberFemale,numberMale)=>{
			return parseInt(numberFemale) + parseInt(numberMale);
		};
	}

}

export default CountryDetails;