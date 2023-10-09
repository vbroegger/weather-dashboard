import { FC, useEffect, useState } from 'react';
import './App.css';
import Page from './Components/Page';
import Header from './Components/Header';
import TodaysWeather from './Components/TodaysWeather';
import { WeatherData } from './Global/global';
import Forecast from './Components/Forecast';

const App: FC<{}> = () => {

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [weather, setWeather] = useState<WeatherData | null>(null);

	useEffect(() => {
		fetch('https://api.open-meteo.com/v1/forecast?latitude=56.1518&longitude=10.2064&hourly=temperature_2m,relativehumidity_2m,uv_index&daily=weathercode,temperature_2m_max&current_weather=true&timezone=auto')
			.then(response => response.json())
			.then(json => {
				setWeather(json)
				setIsLoading(false)
			})
	}, []);

	return (
		<div className="bg-gray-100 h-screen">
			<Page>
				<Header />
				{isLoading && <div className="flex justify-center items-center h-screen"><span className="text-3xl">Loading...</span></div>}
				{!isLoading && <>
					<TodaysWeather weather={weather} />
					<Forecast weather={weather} />
				</>}
			</Page>
		</div>
	);
}

export default App;
