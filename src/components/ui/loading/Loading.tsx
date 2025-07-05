'use client';

import clsx from "clsx";

interface SpinnerProps {
	fullScreen?: boolean;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	verticalPosition?: 'top' | 'center' | 'bottom' | number; // Nueva prop
}

export const LoadingComponent = ( {
							fullScreen = false,
							size = 'md',
							className,
							verticalPosition = 'center'
						}: SpinnerProps) => {
	const sizeClasses = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16'
	};

	// Función para manejar la posición vertical
	const getVerticalPosition = () => {
		if (typeof verticalPosition === 'number') {
			return `top-[${verticalPosition}px]`;
		}

		switch (verticalPosition) {
			case 'top':
				return 'top-0 mt-4';
			case 'bottom':
				return 'bottom-0 mb-4';
			case 'center':
			default:
				return 'top-1/2 -translate-y-1/2';
		}
	};

	return (
		<div className={clsx(
			"flex items-center justify-center",
			className,
			fullScreen && "fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50",
			!fullScreen && "absolute left-0 right-0",
			!fullScreen && getVerticalPosition()
		)}>
			<div className="relative">
				{/* Círculo estático */}
				<div className={clsx(
					"rounded-full absolute border-2 border-solid border-gray-200 dark:border-gray-700",
					sizeClasses[size]
				)} />

				{/* Círculo giratorio */}
				<div className={clsx(
					"rounded-full animate-spin absolute border-2 border-solid border-blue-500 border-t-transparent",
					sizeClasses[size]
				)} />
			</div>
		</div>
	);
};