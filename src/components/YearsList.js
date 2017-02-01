import React, { Component } from 'react';

class YearsList extends Component {
  render() {
    const years = this.props.years;
    return (<select onChange={this.props.onChangeYear} >
      {/*stop the funciton from running in the onChangeYear*/}
      <option value="-1" key="-1">please select the year</option>
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
