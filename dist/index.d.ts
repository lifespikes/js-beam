declare const _default: {
    rollupPageResolver: (name: string, pages: Record<string, () => unknown>) => unknown;
    viteBuildConfig: (config?: import("vite").UserConfig | undefined) => import("vite").UserConfigExport;
    simpleInertiaApp: import("./beams/simpleInertiaApp").InertiaFactory<import("@inertiajs/inertia").PageProps>;
    viteServerConfig: () => {
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
