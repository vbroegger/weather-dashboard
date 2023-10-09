import { FC } from 'react';
import { WeatherData } from '../Global/global';
import { Card } from './Card';
import { weatherDescriptions } from '../Global/weather-descriptions';

interface Props {
	weather: WeatherData | null;
}

const Forecast: FC<Props> = ({ weather }) => {

	const { daily } = weather;

	return (
		<div className="my-4">
			<h2 className="mb-4 font-semibold">Vejrudsigt for de næste 7 dage</h2>
			<div className="flex space-x-4">
				{daily.time.map((time, index) => {

					const weatherDescription = weatherDescriptions[daily.weathercode[index]];
					const date = new Date(time);

					const options = {
						weekday: 'long',
						timeZone: 'Europe/Copenhagen',
						locale: 'da-DK',
					} as any;

					return (
						<Card className="shadow">
							<Card.Title className="flex flex-col">
								<span className="capitalize text-gray-500">{date.toLocaleDateString('da-DK', options)}</span>
								<span className="text-sm">{time}</span>
							</Card.Title>
							<Card.Body>
								<div>
									<img
										src={weatherDescription.day.image}
										alt="Clear Sky"
										className="w-12 h-12"
									/>
									<div>
										<div className="text-2xl font-semibold">{daily.temperature_2m_max[index]}°</div>
										<div className="text-gray-500 text-sm">{weatherDescription.day.description}</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					)
				})}
			</div>
		</div>
	);
}

export default Forecast;
