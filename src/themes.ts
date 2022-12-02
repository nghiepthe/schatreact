import { Dimensions } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

interface BrandColors {
    primary: string
    tint: string
}

interface BasicColors {
    black: string
    silver: string
    gray: string
    white: string
    maroon: string
    red: string
    purple: string
    fuchsia: string
    green: string
    lime: string
    olive: string
    yellow: string
    navy: string
    blue: string
    teal: string
    aqua: string
}

interface ExtendedColors {
    aliceblue: string
    antiquewhite: string
    aqua: string
    aquamarine: string
    azure: string
    beige: string
    bisque: string
    black: string
    blanchedalmond: string
    blue: string
    blueviolet: string
    brown: string
    burlywood: string
    cadetblue: string
    chartreuse: string
    chocolate: string
    coral: string
    cornflowerblue: string
    cornsilk: string
    crimson: string
    cyan: string
    darkblue: string
    darkcyan: string
    darkgoldenrod: string
    darkgray: string
    darkgreen: string
    darkgrey: string
    darkkhaki: string
    darkmagenta: string
    darkolivegreen: string
    darkorange: string
    darkorchid: string
    darkred: string
    darksalmon: string
    darkseagreen: string
    darkslateblue: string
    darkslategray: string
    darkslategrey: string
    darkturquoise: string
    darkviolet: string
    deeppink: string
    deepskyblue: string
    dimgray: string
    dimgrey: string
    dodgerblue: string
    firebrick: string
    floralwhite: string
    forestgreen: string
    fuchsia: string
    gainsboro: string
    ghostwhite: string
    gold: string
    goldenrod: string
    gray: string
    green: string
    greenyellow: string
    grey: string
    honeydew: string
    hotpink: string
    indianred: string
    indigo: string
    ivory: string
    khaki: string
    lavender: string
    lavenderblush: string
    lawngreen: string
    lemonchiffon: string
    lightblue: string
    lightcoral: string
    lightcyan: string
    lightgoldenrodyellow: string
    lightgray: string
    lightgreen: string
    lightgrey: string
    lightpink: string
    lightsalmon: string
    lightseagreen: string
    lightskyblue: string
    lightslategray: string
    lightslategrey: string
    lightsteelblue: string
    lightyellow: string
    lime: string
    limegreen: string
    linen: string
    magenta: string
    maroon: string
    mediumaquamarine: string
    mediumblue: string
    mediumorchid: string
    mediumpurple: string
    mediumseagreen: string
    mediumslateblue: string
    mediumspringgreen: string
    mediumturquoise: string
    mediumvioletred: string
    midnightblue: string
    mintcream: string
    mistyrose: string
    moccasin: string
    navajowhite: string
    navy: string
    oldlace: string
    olive: string
    olivedrab: string
    orange: string
    orangered: string
    orchid: string
    palegoldenrod: string
    palegreen: string
    paleturquoise: string
    palevioletred: string
    papayawhip: string
    peachpuff: string
    peru: string
    pink: string
    plum: string
    powderblue: string
    purple: string
    red: string
    rosybrown: string
    royalblue: string
    saddlebrown: string
    salmon: string
    sandybrown: string
    seagreen: string
    seashell: string
    sienna: string
    silver: string
    skyblue: string
    slateblue: string
    slategray: string
    slategrey: string
    snow: string
    springgreen: string
    steelblue: string
    tan: string
    teal: string
    thistle: string
    tomato: string
    turquoise: string
    violet: string
    wheat: string
    white: string
    whitesmoke: string
    yellow: string
    yellowgreen: string
}

interface SemanticColors {
    error: string
    success: string
    focus: string
}

interface NotificationColors {
    success: string
    successBorder: string
    successIcon: string
    successText: string
    info: string
    infoBorder: string
    infoIcon: string
    infoText: string
    warn: string
    warnBorder: string
    warnIcon: string
    warnText: string
    error: string
    errorBorder: string
    errorIcon: string
    errorText: string
}

interface GrayscaleColors {
    black: string
    darkGrey: string
    mediumGrey: string
    lightGrey: string
    veryLightGrey: string
    white: string
}

interface ColorPallet {
    brandColors: BrandColors
    basicColors: BasicColors
    extendedColors: ExtendedColors
    semantic: SemanticColors
    notification: NotificationColors
    grayscale: GrayscaleColors
}

interface Assets {
    fonts: {
        arciform: string
    }
    img: {
        backgroundTop: any
        background: any
        logoChat: any
        maskGroup: any
    }
}

interface NavigationTheme {
    linearGradient: {
        statusColors: [string, string, string]
        headerColors: [string, string, string]
    }
}

const BrandColors: BrandColors = {
    primary: '#0057d6',
    tint: '#2980ff'
};

const BasicColors: BasicColors = {
    black: '#000000',
    silver: '#C0C0C0',
    gray: '#808080',
    white: '#FFFFFF',
    maroon: '#800000',
    red: '#FF0000',
    purple: '#800080',
    fuchsia: '#FF00FF',
    green: '#008000',
    lime: '#00FF00',
    olive: '#808000',
    yellow: '#FFFF00',
    navy: '#000080',
    blue: '#0000FF',
    teal: '#008080',
    aqua: '#00FFFF',
};

const ExtendedColors: ExtendedColors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

const SemanticColors: SemanticColors = {
    error: '#D8292F',
    success: '#2E8540',
    focus: '#3399FF',
}

const NotificationColors: NotificationColors = {
    success: '#313132',
    successBorder: '#2E8540',
    successIcon: '#2E8540',
    successText: '#FFFFFF',
    info: '#313132',
    infoBorder: '#0099FF',
    infoIcon: '#0099FF',
    infoText: '#FFFFFF',
    warn: '#313132',
    warnBorder: '#FCBA19',
    warnIcon: '#FCBA19',
    warnText: '#FFFFFF',
    error: '#313132',
    errorBorder: '#D8292F',
    errorIcon: '#D8292F',
    errorText: '#FFFFFF',
}

const GrayscaleColors: GrayscaleColors = {
    black: '#000000',
    darkGrey: '#313132',
    mediumGrey: '#606060',
    lightGrey: '#D3D3D3',
    veryLightGrey: '#F2F2F2',
    white: '#FFFFFF'
}

export const ColorPallet: ColorPallet = {
    brandColors: BrandColors,
    basicColors: BasicColors,
    extendedColors: ExtendedColors,
    semantic: SemanticColors,
    notification: NotificationColors,
    grayscale: GrayscaleColors,
};

export const Assets: Assets = {
    fonts: {
        arciform: 'Arciform'
    },
    img: {
        backgroundTop: require("./assets/img/background-top.png"),
        background: require("./assets/img/background.png"),
        logoChat: require("./assets/img/logo-chat.png"),
        maskGroup: require("./assets/img/mask-group.png")
    }
}

export const NavigationTheme: NavigationTheme = {
    linearGradient: {
        statusColors: ['#1e63cb', '#0e7eca', '#3c8eb1'],
        headerColors: ['#277bff', '#139bfe', '#01bafa']
    }
}

export interface Theme {
    ColorPallet: ColorPallet
    Assets: Assets
    NavigationTheme: NavigationTheme
}

export const theme: Theme = {
    ColorPallet,
    Assets,
    NavigationTheme
}
