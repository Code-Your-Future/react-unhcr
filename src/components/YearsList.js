import React, { Component } from 'react';

class YearsList extends Component {
  render() {
    const years = this.props.years;
    const func = this.props.whenChange;
    return (<select onChange={func}>
      {
        years.map((year, index) => {
          return(
            <option value={year} key={index}  >
              {year}
            </option>
          )
        })
      }
    </select>)
  }
}

export default YearsList;