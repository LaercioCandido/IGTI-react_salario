import React, { Component } from 'react'
import css from './InputFullSalary.module.css'
import InputReadOnly from '../InputReadOnly/InputReadOnly'

export default class InputFullSalary extends Component {
	constructor() {
		super();

		this.state = {
			fullSalary: ''
		}
	}

	handleFilter = (event) => {
		const filterSalary = event.target.value;

		this.setState({fullSalary: filterSalary});
	}

	render() {
		const {fullSalary} = this.state;
		return (
			<>
				<div className={css.container}>
					<span>Salário Bruto</span>
					<input
						placeholder="Escreva o salário bruto aqui"
						type="number"
						value={fullSalary}
						onChange={this.handleFilter}
						step="1"
					/>
				</div>
					<InputReadOnly fullSalary={fullSalary} />
			</>
		)
	}
}
