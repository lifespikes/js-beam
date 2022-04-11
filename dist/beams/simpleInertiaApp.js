import resolvePageComponent from './rollupPageResolver';
const simpleInertiaApp = (options) => {
    const defaultResolver = (name) => resolvePageComponent(name, options.pages ?? {});
    const { resolve = defaultResolver, ...rest } = options;
    return simpleInertiaApp({
        ...options,
        resolve
    });
};
export default simpleInertiaApp;
