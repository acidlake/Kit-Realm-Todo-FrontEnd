module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			colors: {
				//Blue
				'curbo-blue-dacnis': '#45DBF2',
				'curbo-blue-turquoise': '#07C8E8',
				'curbo-blue-epimetheus': '#4AAFD5',
				'curbo-blue-boysenberry-shadow': '#F2F5F9',
				'curbo-blue-white-kodama': '#E6F4FF',
				'curbo-blue-starlit-eve': '#374151',
				'curbo-blue-lost-in-space': '#05356C',
				'curbo-blue-satire': '#C3C2CE',
				'curbo-blue-velvet-grey': ' #ABAAB5',

				//Black
				'curbo-black': '#000000',
				'curbo-black-haiti': '#201F2C',
				'curbo-black-mortar': '#585858',
				'curbo-black-howl': '#201F2C',

				//White
				'curbo-white': '#FFFFFF',
				'curbo-white-smoke': '#F5F5F5',
				'curbo-white-edgar': '#EDEDED',

				//Green
				'curbo-green-aruba': '#4DB08E',
				'curbo-green-melting-glacier': '#EBF9F5',

				//Gray
				'curbo-grey-rainy': '#A5A5A5',
				'curbo-grey-white-pixel': '#DBDBDB',
				'curbo-grey-snowflake': '#F0F0F0',
				'curbo-grey-silver-medal': '#D6D6D6',
				'curbo-grey-robo-master': '#ADADAD',

				//Pink
				'curbo-pink-lemonade': '#FFEBEB',
				'curbo-pink-sea-salt-sherbet': '#FEF3F7',

				//Red
				'curbo-red': '#FF0000',
				'curbo-red-cinnamon-satin': '#D0607E',
				'curbo-red-cascading-white': '#F6F6F6',
				'curbo-red-vanilla-strawberry': '#FFE6E6',
				'curbo-red-faded': '#D54A4A',
				'curbo-red-rising-ash': '#968686',
				'curbo-red-antique-petal': '#E8E4E4',
				'curbo-sugar-poppy': '#E58585',
				'curbo-red-trolley-grey': '#818181',

				//Orange
				'curbo-orange-sultan-gold': '#F7AE14',
				'curbo-orange-sheer-peach': '#FFF7E6'
			},
			screens: {
				xs: '300px',
				// => @media (min-width: 320px) { ... }

				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1920px'
				// => @media (min-width: 1920px) { ... }
			},

			backgroundImage: {
				'angle-down-solid': "url('/img/icon/angle-down-solid.svg')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
