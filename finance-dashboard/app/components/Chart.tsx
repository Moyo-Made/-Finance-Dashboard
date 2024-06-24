import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const IncomeExpenseChart = () => {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<Chart | null>(null);

	const generateRandomData = () => {
		const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
		const incomeData = [];
		const expenseData = [];
		for (let i = 0; i < 7; i++) {
			const randomIncome = Math.floor(Math.random() * 2000) + 3000;
			const randomExpense = Math.floor(Math.random() * 1500) + 2000;
			incomeData.push(randomIncome);
			expenseData.push(randomExpense);
		}
		return { days, incomeData, expenseData };
	};

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");
			if (ctx) {
				const { days, incomeData, expenseData } = generateRandomData();

				const data = {
					labels: days,
					datasets: [
						{
							label: "Income",
							data: incomeData,
							backgroundColor: "#FF7F7F",
							borderWidth: 1,
						},
						{
							label: "Expenses",
							data: expenseData,
							backgroundColor: "#7FBFFF",
							borderWidth: 1,
						},
					],
				};

				if (chartInstance.current) {
					chartInstance.current.destroy();
				}

				chartInstance.current = new Chart(ctx, {
					type: "bar",
					data: data,
					options: {
						scales: {
							x: {
								ticks: {
									color: "#ffff", // Change text color to white
								},
							},
							y: {
								ticks: {
									color: "#ffff", // Change text color to white
								},
							},
						},
					},
				});
			}
		}

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, []);

	return <canvas ref={chartRef} />;
};

export default IncomeExpenseChart;
