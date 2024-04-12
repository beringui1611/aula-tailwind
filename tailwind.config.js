/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/src/uber/assets/bguber.png')",
        'city': "url('/src/uber/assets/bg-city.png')",
        "nike": "url(/src/nike/assets/bg.png)"
    },
      keyframes: {
        floatUp: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-8px)" },
          "100%": {transform: "translatey(0px)"}
        }
      },
      animation: {
        floatUp: "floatUp 2s infinite"
      },
      colors: {
        primaria: "#ffff"
      },
      fontFamily: {
        "sans": ["Montserrat"]
      }
    },
  },
  plugins: [],
}

