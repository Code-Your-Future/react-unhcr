import React, { Component } from 'react';

class YearsList extends Component {
  render() {
    const years = this.props.years;
    return (<select onChange={this.props.onYearChange} >
      <option value="-1" key="-1">Year</option>
      {
        years.map((year, index) => {
          return(
            <option value={year} key={index} >
              {year}
            </option>
          )
        })
      }
    </select>
        )
  }
}
export default YearsList;