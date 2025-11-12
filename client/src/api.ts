import axios from 'axios';

// Safely access Vite env (augment type inline to avoid global types change)
interface ViteEnvImportMeta extends ImportMeta { env: Record<string, string>; }
const viteMeta = import.meta as ViteEnvImportMeta;
const apiBase = (viteMeta.env?.VITE_API_URL as string) || 'http://localhost:5000/api';

// Derive asset host (strip trailing /api) for static file URLs like uploads
const assetBase = apiBase.replace(/\/api\/?$/, '');

export const api = axios.create({ baseURL: apiBase, timeout: 10000 });

// Attach Authorization header if token is available
api.interceptors.request.use((config) => {
	try {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers = config.headers || {};
			(config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
		}
	} catch {}
	return config;
});

// Basic response error handling
api.interceptors.response.use(
	(res) => res,
	(error) => {
		if (error?.response?.status === 401) {
			// optionally clear token or redirect
			// localStorage.removeItem('token');
		}
		return Promise.reject(error);
	}
);
export const assetUrl = (path: string) => `${assetBase}${path}`;
