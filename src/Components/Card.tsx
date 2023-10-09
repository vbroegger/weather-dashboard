import React from 'react';
import { classNames } from '../Global/helper';

interface Props {
	children: any;
	className?: string;
}

export const Card = ({ children, className = undefined, ...rest }: Props) => (
	<div className={
		classNames(
			'bg-white px-4 sm:px-6 py-5 w-full rounded-md',
			'flex flex-col',
			className || '',
		)
	}
	>
		{children}
	</div>
);

Card.Title = ({ children, className = '' }: Props) => (
	<h3 className={classNames('text-base font-medium text-gray-900', className)}>{children}</h3>
);

Card.Description = ({ children, className = '' }: Props) => (
	<p className={classNames('text-sm text-gray-500', className)}>
		{children}
	</p>
);

interface CardBody {
	children: any;
	className?: string;
}

Card.Body = ({ children, className }: React.PropsWithChildren<CardBody>) => (
	<div className={classNames(className ?? 'mt-4 grow')}>
		{children}
	</div>
);

Card.FullWidthBody = ({ children, className = '' }: Props) => (
	<div className={classNames(
		'-mx-4 -mb-5 sm:-mx-6 mt-4 flex',
		className,
	)}
	>
		{children}
	</div>
);

Card.ChartBody = ({ children }: Props) => (
	<div className="-ml-4 -mr-2.5 -mb-2.5">
		{children}
	</div>
);

Card.Scroll = ({ children, className = '' }: React.PropsWithChildren<CardBody>) => (
	<div className={classNames('overflow-y-auto max-h-80 grow px-4 sm:px-6 pb-5', className)}>
		{children}
	</div>
);
