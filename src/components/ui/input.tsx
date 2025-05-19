import { cva, type VariantProps } from 'class-variance-authority'
import { console } from 'inspector'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { FormIcon } from './form'

export enum InputColor {
	Default = 'default',
	Primary = 'primary',
	Secondary = 'secondary',
	Info = 'info',
	Warning = 'warning',
	Success = 'success',
	Destructive = 'destructive',
}

export const inputVariants = cva(
	' w-full  bg-background  rounded py-2 px-3 h-9 border text-sm font-normal border border-solid border-default-200 outline-none focus:outline-none  file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:bg-default-200 disabled:cursor-not-allowed disabled:opacity-50  transition-all duration-300 ',
	{
		variants: {
			color: {
				default:
					'border-default-200 text-default-500 focus:outline-none focus:border-default focus:border-default-500 disabled:bg-default-200  disabled:bg-default-500  placeholder:text-accent-foreground/50',
				primary:
					'border-primary/50 text-primary focus:border-primary disabled:bg-primary/30 disabled:placeholder:text-primary  placeholder:text-primary/70',
				secondary:
					'border-default-300 text-default-700  focus:border-secondary  disabled:bg-secondary/30 disabled:placeholder:text-secondary  placeholder:text-default-600',
				info: 'border-info/50 text-info focus:border-info  disabled:bg-info/30 disabled:placeholder:text-info  placeholder:text-info/70',
				warning:
					'border-warning/50 text-warning  focus:border-warning disabled:bg-warning/30 disabled:placeholder:text-info  placeholder:text-warning/70',
				success:
					'border-success/50 text-success focus:border-success   disabled:bg-success/30 disabled:placeholder:text-info  placeholder:text-success/70',
				destructive:
					'border-destructive/50 text-destructive focus:border-destructive  disabled:bg-destructive/30 disabled:placeholder:text-destructive  placeholder:text-destructive/70',
			},
			size: {
				sm: 'h-8 text-xs read-only:leading-8',
				default: 'h-9 text-xs read-only:leading-none',
				md: 'h-10 text-sm read-only:leading-10',
				lg: 'h-12  text-sm read-only:leading-[48px]',
			},
		},
		defaultVariants: {
			color: InputColor.Default,
			size: 'default',
		},
	}
)

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	color?: InputColor
	size?: any
	showSuccess?: boolean
	isTouched?: boolean
	error?: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, size, color, showSuccess, isTouched, error, ...props }, ref) => {
		color = !isTouched
			? color
			: error
				? InputColor.Destructive
				: props.value && showSuccess
					? InputColor.Success
					: color

		return showSuccess ? (
			<div className='relative'>
				<input
					type={type}
					className={cn(inputVariants({ color, size }), className)}
					ref={ref}
					{...props}
				/>
				<FormIcon isTouched={isTouched} error={error} />
			</div>
		) : (
			<input
				type={type}
				className={cn(inputVariants({ color, size }), className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
