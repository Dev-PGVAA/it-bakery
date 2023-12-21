import { useState } from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks
const [isClass, setIsClass] = useState(false)

export const isClass = () => {
	return isClass
}
export const addCl = (event: any) => {
	setIsClass(CurrentStatus => !CurrentStatus)
}
