declare const _default: {
    resolve: (name: string, pages: Record<string, () => unknown>) => unknown;
    config: (config?: import("vite").UserConfig) => import("vite").UserConfigExport;
    livrApp: import("./utils/inertia").InertiaFactory<import("@inertiajs/inertia").PageProps>;
    http: () => {
        host: string;
        port: number;
        https: boolean | {
            key: string;
            cert: string;
        };
        hmr: {
            host: string;
        };
        proxy: {
            [x: string]: string;
        };
    };
};
export default _default;
