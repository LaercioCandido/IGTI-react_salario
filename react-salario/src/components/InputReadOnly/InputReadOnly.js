import React, { Component } from 'react';
import css from './InputReadOnly.module.css';
import Inputs from './Inputs';
import Bar from '../ProgressBarSalary/ProgressBarSalary';
import { calculateSalaryFrom } from './Salary';

export default class InputReadOnly extends Component {
	render() {
		const { fullSalary } = this.props;
		const {
			baseINSS,
			baseIRPF,
			discountINSS,
			discountIRPF,
			netSalary,
		} = calculateSalaryFrom(fullSalary);

		const formatter = new Intl.NumberFormat([], {
			style: 'currency',
			currency: 'BRL'
		})

		const percent = (number) => {
			 return (number/baseINSS*100).toFixed(2);
		}

		const percentDiscountINSS = percent(discountINSS);
		const percentDiscountIRPF = percent(discountIRPF);
		const percentNetSalary = percent(netSalary);
		const formatBaseINSS = formatter.format(baseINSS);
		const formatBaseIRPF = formatter.format(baseIRPF);
		const formatDiscountINSS = formatter.format(discountINSS);
		const formatDiscountIRPF = formatter.format(discountIRPF);
		const formatNetSalary = formatter.format(netSalary);

		return (
			<div>
				<div className={css.container}>
					<Inputs title={"Base INSS"} number={formatBaseINSS} />
					<Inputs title={"Desconto INSS"} number={formatDiscountINSS} color={"#e67e22"} percent={percentDiscountINSS} />
				</div>
				<div className={css.container}>
					<Inputs title={"Base IRPF"} number={formatBaseIRPF} />
					<Inputs title={"Desconto IRPF"} number={formatDiscountIRPF} color={"#c0392b"} percent={percentDiscountIRPF} />
				</div>

				<div className={css.salarioliquido}>
					<Inputs title={"Salário Líquido"} number={formatNetSalary} color={"#16a085"} percent={percentNetSalary} />
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Bar value={percentDiscountINSS} color="#e67e22" />
					<Bar value={percentDiscountIRPF} color="#c0392b" />
					<Bar value={percentNetSalary} color="#16a085" />
				</div>


		</div>


		)
	}
}

