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
                btnLight: "#",
                textLight: "#000000",
                primaryDark: "#111821",
                secondaryDark: "#",
                btnDark: "#",
                textDark: "#FFFFFF",
            }
        },
    },
    plugins: [],
}