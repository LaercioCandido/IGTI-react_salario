import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import css from './App.module.css'

export default class App extends Component {
	render() {
		return (
			<div className={css.container}>
				<h2>Cálculo de Salário</h2>
				<InputFullSalary />
			</div>
		);
	}
}
