module.exports = {
    purge: ["./public/**/*.html"],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            ('emerald')
        ],
    },

};
