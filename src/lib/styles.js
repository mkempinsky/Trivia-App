// COLORS
export const blue = shade => {
    const shades = {
        200: '#4E9EE0',
        300: '#182957',
        400: '#1C2838',
        500: '#354763',
        550: '#0F2555',
        600: '#2F77B2',
        700: '#27323F',
        default: '#2F77B2'
    };
    return shades[+shade] || shades.default;
};

export const yellow = (shade, opacity = 1) => {
    const shades = {
        500: `rgba(255, 179, 71, ${opacity})`,
        default: `rgba(255, 179, 71, ${opacity})`
    };
    return shades[+shade] || shades.default;
}

export const dropShadow = shadow => {
    const shadows = {
        500: '0 14px 28px 0 rgba(37, 79, 115, 0.11)',
        default: '0 14px 28px 0 rgba(37, 79, 115, 0.11)'
    };
    return shadows[+shadow] || shadows.default;
};



// GLOBAL STYLES
export const globalStyles = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	html, body {
		height: 100%;
        font-family: 'Gudea', sans-serif;
		color: #1C2838;
		font-size: 16px;
	}
	html {
		-webkit-font-smoothing: antialiased;
	}
    h1 {
        font-family: 'Comfortaa', cursive;
        font-weight: Bold;
        font-size: 22px;
    }
    h2 {
        font-family: 'Comfortaa', cursive;
        font-size: 20px;
    }
	`;

export const px = value => {
    if (typeof value === 'number') {
        return value + 'px';
    } else if (typeof value === 'string') {
        /**
         * Check if already ends with px, em, rem, etc.
         */
        const hasLetters = value.match(/\d/g);

        if (hasLetters) {
            let numsOnly = hasLetters.join('');
            return numsOnly + 'px';
        }

        return value + 'px';
    } else {
        console.log('Must pass string or number to px()');
        return '25px';
    }
};

export const BREAKPOINT = '992px';
export const BREAKPOINT_PX = px(BREAKPOINT);

export const MAX_WIDTH = '1280';
export const MAX_WIDTH_PX = px(MAX_WIDTH);


export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
              result[3],
              16
          )}`
        : '0, 0, 0';
}
