export const fakeDelay = async (delay: number) =>
	await new Promise((resolve) => setTimeout(resolve, delay))
