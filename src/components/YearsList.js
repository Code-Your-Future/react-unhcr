import React, { Component } from 'react';

class YearsList extends Component {
  render() {
    const years = this.props.years;
    return (<select onChange={this.props.onChangeYear} >
      
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
