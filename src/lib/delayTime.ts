export const delayTime = (data: number) => {
	if (data % 3 === 1) {
		return 0
	} else if (data % 3 == 2) {
		return 0.25
	} else if (data % 3 == 0) {
		return 0.35
	}
}
