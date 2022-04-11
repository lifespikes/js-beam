declare const rollupPageResolver: (name: string, pages: Record<string, () => unknown | string>) => unknown;
export default rollupPageResolver;
