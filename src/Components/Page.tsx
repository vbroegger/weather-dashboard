import React, { FC } from 'react'

interface Props {
	className?: string;
	children: React.ReactNode;
}

const Page: FC<Props> = ({ className, children }) => {

	return (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				{children}
			</div>
		</div>
	)
}

export default Page
