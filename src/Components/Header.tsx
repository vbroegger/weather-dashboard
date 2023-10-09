import React, { FC } from 'react';

const Header: FC<{}> = () => {
	return (
		<div className="flex items-center">
			<img
				src="/better-developers-logo.svg"
				alt="Better Developers Logo"
				className="w-12 h-12"
			/>
			<span className="ml-4 font-bold text-2xl">Better Developers</span>
		</div>
	);
}

export default Header;
