import { UserConfig } from 'vite';
declare const generateViteConfig: (config?: UserConfig) => import("vite").UserConfigExport;
export default generateViteConfig;
