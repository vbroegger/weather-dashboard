import React, { FC } from 'react';
import Chart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import { defaultChartProps, getArrowIcon, getCurrentHumidity } from '../Global/helper';
import { Card } from './Card';
import { weatherDescriptions } from '../Global/weather-descriptions';
import { WeatherData } from '../Global/global';


interface Props {
	weather: WeatherData | null;
}

const TodaysWeather: FC<Props> = ({ weather }) => {

	const options: ApexOptions = {
		...defaultChartProps,
		xaxis: {
			categories: weather?.hourly?.time.slice(0, 24),
			labels: {
				formatter: function (val: any) {
					const date = new Date(val)
					return `${date.getHours()}:00`;
				}
			}
		},
		yaxis: {
			min: 0,
			max: 30,
			labels: {
				formatter: function (val: any) {
					return `${val}°`;
				}
			}
		}
	}

	const series = [
		{
			name: "Temperatur",
			data: weather?.hourly?.temperature_2m.slice(0, 24)
		}
	]

	const index: number = weather.current_weather.weathercode;
	const weatherDescription = weatherDescriptions[index];
	const dayDescription = weatherDescription.day.description;
	const dayLogo = weatherDescription.day.image;
	const nightDescription = weatherDescription.night.description;
	const nightLogo = weatherDescription.night.image;


	return (
		<Card className="bg-white my-12 shadow">
			<div className="flex justify-between">
				<div className="flex space-x-8">
					<div className="flex flex-col">
						<span className="text-gray-400 uppercase">Nuværende vejr</span>
						<div className="flex items-center">
							<span className="text-3xl font-bold">{weather?.current_weather?.temperature}°</span>
							<img src={weather?.current_weather?.is_day ? dayLogo : nightLogo} alt="todays-weather" className="-my-4" />
						</div>
						<p className="text-sm text-gray-600">{weather?.current_weather?.is_day ? dayDescription : nightDescription}</p>
					</div>
				</div>
				<div className="flex justify-between space-x-8">
					<div className="flex flex-col">
						<span className="text-gray-400 uppercase text-sm">Vindhastighed</span>
						<div className="flex space-x-4 items-center">
							<span className="text-lg mt-2 font-bold">{weather?.current_weather?.windspeed} km/h</span>
							<span className="text-lg mt-2 font-bold text-white bg-blue-900 h-7 w-7 rounded-full flex items-center justify-center">{getArrowIcon(weather?.current_weather?.winddirection)}</span>
						</div>
					</div>
					<div className="flex flex-col">
						<span className="text-gray-400 uppercase text-sm">Luftfugtighed</span>
						<div className="flex space-x-4 items-center">
							<span className="text-lg mt-2 font-bold">{getCurrentHumidity(weather)}%</span>
						</div>
					</div>
				</div>
			</div>
			<Card.FullWidthBody>
				<div className="w-full">
					<Chart
						type="area"
						options={options}
						series={series}
						download={false}
						height={350}
					/>
				</div>
			</Card.FullWidthBody>
		</Card>
	);
}

export default TodaysWeather;
