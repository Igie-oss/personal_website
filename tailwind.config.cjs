/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryLight: "#FFFFFF",
                secondaryLight: "#54B689",
                btnLight: "#1976D2",
                textLight: "#000000",
                primaryDark: "#111821",
                secondaryDark: "#",
                btnDark: "#",
                textDark: "#FFFFFF",
            },
            animation: {
                mypulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '.2',
                    }
                }
            }
        },
    },
    plugins: [],
}