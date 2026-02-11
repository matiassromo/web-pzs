/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#e6f3ff',
                    DEFAULT: '#0072ff',
                    dark: '#005dd6',
                    text: '#003366',
                },
                cyan: {
                    DEFAULT: '#00d4d8',
                    text: '#065c9b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                script: ['Pacifico', 'cursive'],
            },
        },
    },
    plugins: [],
}
