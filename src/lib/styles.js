// COLORS
export const blue = (shade) => {
    const shades = {
        200: '#4E9EE0',
        300: '#182957',
        400: '#1C2838',
        500: '#354763',
        550: '#0F2555',
        600: '#2F77B2',
        700: '#27323F',
        default: '#2F77B2',
    };
    return shades[+shade] || shades.default;
};

export const yellow = (shade, opacity = 1) => {
    const shades = {
        500: `rgba(255, 179, 71, ${opacity})`,
        default: `rgba(255, 179, 71, ${opacity})`,
    };
    return shades[+shade] || shades.default;
};

export const dropShadow = (shadow) => {
    const shadows = {
        500: '0 14px 28px 0 rgba(37, 79, 115, 0.11)',
        default: '0 14px 28px 0 rgba(37, 79, 115, 0.11)',
    };
    return shadows[+shadow] || shadows.default;
};

// GRADIENTS
export const purpleGradient = `linear-gradient(
	to right,
	#667eea,
	#764ba2,
	#6b8dd6,
	#8e37d7
);`;

export const BREAKPOINT = '992px';

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
        font-family: 'Work Sans', sans-serif;
		color: #1C2838;
		font-size: 16px;
	}
	html {
		-webkit-font-smoothing: antialiased;
    }

    :root {
        --success: #49a147;
		--warning: #ffad0d;
        --error: #e35141;

        --gray-100: #fafafa;
        --gray-200: #f5f5f5;
        --gray-300: #eeeeee;
        --gray-400: #e0e0e0;
        --gray-500: #bdbdbd;
        --gray-600: #5e5e5e;
        --gray-700: #252525;

        --primary: 	#085f6b;

        --secondary: #bdd9dd;

        --interactive: #ffd700;
        --interactive-100: #fff7cc;
        --interactive-200: #ffef99;
        --interactive-300: #ffe766;
        --interactive-400: #ccac00;


        --font-title: 'Comfortaa', cursive;
        --font-copy: "Raleway", sans-serif;
    }
    h1 {
        font-family: 'Comfortaa', cursive;
        font-weight: Bold;
        font-size: 22px;
    }
    h2 {
        font-family: 'Comfortaa', cursive;
        font-size: 32px;
	}
	h4 {
		font-size: 28px;
		font-weight: normal;

	}
	a {
		font-family: 'Comfortaa', cursive;
	}
	p {
		font-size: 18px;
	}
	@media screen and (min-width: ${BREAKPOINT}){
		p {
			font-size: 16px;
		}
	}
	`;

export const px = (value) => {
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
