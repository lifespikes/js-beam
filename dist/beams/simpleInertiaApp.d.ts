import { CreateInertiaAppSetupReturnType, HeadManagerTitleCallback, PageResolver, SetupOptions } from '@inertiajs/inertia-react';
import * as Inertia from '@inertiajs/inertia';
import { PageProps } from '@inertiajs/inertia';
export interface InertiaSetup<T = PageProps> {
    (options: SetupOptions<HTMLElement, T>): CreateInertiaAppSetupReturnType;
}
export interface InertiaFactory<SharedProps = PageProps> {
    (options: {
        title?: HeadManagerTitleCallback;
        resolve?: PageResolver;
        id?: string;
        page?: Inertia.Page | string;
        render?: undefined;
        pages?: Record<string, () => unknown>;
        setup?: InertiaSetup<SharedProps>;
    }): Promise<CreateInertiaAppSetupReturnType>;
}
declare const simpleInertiaApp: InertiaFactory;
export default simpleInertiaApp;
