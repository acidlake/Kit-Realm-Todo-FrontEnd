import adapter from '@sveltejs/adapter-netlify';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/lib/shared/components'),
					$ui: resolve('./src/lib/shared/ui'),
					$core: resolve('./src/lib/core'),
					$constants: resolve('./src/lib/core/constants'),
					$store: resolve('./src/lib/core/stores'),
					$graphql: resolve('./src/lib/core/graphql'),
					$environment: resolve('./src/lib/environments'),
					$data: resolve('./src/lib/data'),
					$utils: resolve('./src/lib/utils')
				}
			}
		}
	}
};

export default config;
