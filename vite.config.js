import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
	server: {
		port: 5173,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': '*'
		}
	},
  	build: {
		minify: false,
		lib: {
			entry: './public/bdCmpHandler.js',
			formats: ['es'],
			fileName: 'bdCmpHandler',
		},
		rollupOptions: {
			plugins: [
				terser({
					format: {
						comments: false
					},
					compress: true,
					mangle: true
				})
			]
		}
	}
});