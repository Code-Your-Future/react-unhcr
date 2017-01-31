import React, { Component } from 'react';

class ListOfYears extends Component{

	render(){
		const yearList=this.props.listOfYear;
		const defaultYear=this.props.defalutYear;

		return(
			<select value={defaultYear} onChange={this.onChnageHundler.bind(this)}>
			          {   
			            yearList.map((yearList,index)=>{
			              return(
			                <option value={yearList} key={index}>
			                {yearList}
			                </option>
			            )
			            })
			          }
			</select>)
	}

	onChnageHundler(event){
    	this.props.getYear(event.target.value);
  	}
}

export default ListOfYears;