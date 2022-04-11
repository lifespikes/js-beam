declare const resolve: (name: string, pages: Record<string, () => unknown | string>) => unknown;
export default resolve;
