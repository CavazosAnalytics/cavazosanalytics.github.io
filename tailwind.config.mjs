export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.{html,svg}'
  ],
  theme: {
    extend: {
      colors: {
        corbeau: '#051727',
        trapped: {
          darkness: '#061829',
          d2: '#061929',
          d3: '#0a1c2b',
        },
        whisper: { smoke: '#c8ced2' },
        mercury: '#ececec',
        midnight: { sky: '#424852' },
        blue: { into: '#4f80ac' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: { soft: '0 8px 30px rgba(0,0,0,0.12)' },
      container: { center: true, padding: '1rem' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
