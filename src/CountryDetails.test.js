import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sum from './components/CountryDetails';

/* This is the test procedure that calculate the total number of male and female
and failed one of the parameter is string*/
/*
describe('Sum',()=>{
	it('sum will retern the sum of male and female',()=>{
		function sum(numberOfFemale,numberOfMale){
			return numberOfFemale + numberOfMale;
		}
		const total = sum(1,'2');
		expect(total).toEqual(3);

	});
});
*/

/* This is the test procedure that calculate the total number of male and female
and passed when both parameters are integer*/

describe('Sum',()=>{
	it('sum will retern the sum of male and female',()=>{
		function sum(numberOfFemale,numberOfMale){
			return numberOfFemale + numberOfMale;
		}
		const total = sum(1,2);
		expect(total).toEqual(3);

	});
});




