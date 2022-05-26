module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            textColor: {
                alliance: {
                    base: 'var(--color-text-alliance)'
                }

            }
        },
	},
	plugins: [],
}
