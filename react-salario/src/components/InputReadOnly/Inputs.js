import React, { Component } from 'react'
import css from './InputReadOnly.module.css'

export default class Inputs extends Component {
	render() {
		const { title, number, color = "black", percent = 'NaN' } = this.props;
		return (
			<div className={css.inputread}>
					<span>{title}</span>
					<input
						type="text"
						readOnly
						value={number + (percent === 'NaN' ? ' ' : " (" + percent + "%)")}
						style={{
							color:color,
							fontWeight: 600,
						}}
					/>
			</div>
		)
	}
}
