import localFont from "next/font/local";

export const termina = localFont({
    src: [
        { 
            path: '../../../public/fonts/Termina/TerminaThin.otf', 
            weight: '100',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaExtraLight.otf',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaLight.otf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaRegular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaMedium.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaDemi.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaBold.otf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaHeavy.otf',
            weight: '800',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/Termina/TerminaBlack.otf',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-termina',
})
