module.exports = {
    theme: {
        extend: {
            maxHeight: {
                md: '28rem',
            }
        },
        gradients: theme => ({
            primary: ['45deg', theme('colors.blue.400'), theme('colors.blue.600')]
        }),
        animations: {
            spin: 'spin 4s linear infinite'
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'odd', 'hover', 'focus'],
    },
    plugins: [
        require('tailwindcss-plugins/gradients'),
        require('tailwindcss-plugins/animations'),
        require('tailwindcss-plugins/keyframes/spin'),
        require('@tailwindcss/custom-forms'),
    ]
}
