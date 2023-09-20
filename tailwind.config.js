module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#0B1CBA",
        secondary: "#001E18",
        background: "#94B9F9",
        text: "#332C5C",
        text2: "#494369",
        email: "#E7E8F1",
        emailtext: "#7D7896",
        transparent: "transparent",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        1: "4px",
      },
      backgroundImage: {
        homeimage01: "url('../src/assets/homeimagesc.png')",
        homeimage02: "url('../src/assets/homeimagesc.png')",
        imagebig: "url('../src/assets/imagebig.png')",
        imagesmall: "url('../src/assets/imagesmall.png')",
        homeimage2: "url('../src/assets/homeimage2.png')",
        slant: "url('../src/assets/slant.png')",
        aboutbg: "url('../src/assets/aboutbg.png')",
        stripe: "url('../src/assets/stripe.png')",
        serviceimage: "url('../src/assets/serviceimage.png')",
        investimage: "url('../src/assets/investimage.png')",
        contactimage: "url('../src/assets/contactimage.png')",
        team: "url('../src/assets/team.jpg')",
        privacy: "url('../src/assets/privacy.png')",
        faqimage: "url('../src/assets/faqimage.png')",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
