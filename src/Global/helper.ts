

/**
* Join strings
* @author   Tailwind
* @param    {...String} classes
* @return   {String}
*/

import { ApexOptions } from "apexcharts";

export function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

/**
 * Splice an array into chunk on a given size
 */
export function chunkArray(arr: any, size: any) {
	const myArray = [];
	for (let i = 0; i < arr.length; i += size) {
		myArray.push(arr.slice(i, i + size));
	}
	return myArray;
}

export const defaultChartProps: Partial<ApexOptions> = {
	chart: {
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		style: {

		},
		custom({
			series, seriesIndex, dataPointIndex, w,
		}) {
			return (`
				<div class="inline-flex shadow-md items-center px-4 py-2 rounded text-xs font-bold bg-gray-50 text-gray-800">
					${w.globals.seriesNames[seriesIndex]}: ${series[seriesIndex][dataPointIndex]}°
				</div>`
			);
		},
	},
	stroke: {
		curve: 'smooth',
		lineCap: 'round',
		width: 3,
	},
	colors: ['#65DA98', '#D54E4E', '#FFB563'],
};

// Map wind directions to arrow icons
export const getArrowIcon = (angle: number) => {
	if (angle >= 337.5 || angle < 22.5) {
		return '↑'; // North
	} else if (angle >= 22.5 && angle < 67.5) {
		return '↗'; // Northeast
	} else if (angle >= 67.5 && angle < 112.5) {
		return '→'; // East
	} else if (angle >= 112.5 && angle < 157.5) {
		return '↘'; // Southeast
	} else if (angle >= 157.5 && angle < 202.5) {
		return '↓'; // South
	} else if (angle >= 202.5 && angle < 247.5) {
		return '↙'; // Southwest
	} else if (angle >= 247.5 && angle < 292.5) {
		return '←'; // West
	} else if (angle >= 292.5 && angle < 337.5) {
		return '↖'; // Northwest
	}
};


export const getCurrentHumidity = (weatherData) => {
	const currentWeatherTime = new Date(weatherData?.current_weather?.time);
	const currentHour = currentWeatherTime.getHours();
	const hourlyTime = weatherData?.hourly?.time;
	const relativeHumidity = weatherData?.hourly?.relativehumidity_2m;

	// Find the index of the current hour in the hourly time array
	const currentIndex = hourlyTime?.findIndex((hour) => {
		const hourNumber = parseInt(hour.substring(11, 13), 10); // Extract the hour part
		return hourNumber === currentHour;
	});

	if (currentIndex !== -1) {
		// Use the index to get the corresponding relative humidity value
		const humidity = relativeHumidity[currentIndex];
		return humidity;
	} else {
		// Handle the case where the current hour is not found in the data
		return 'Data not available';
	}
}

