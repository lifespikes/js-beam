import { CreateInertiaAppSetupReturnType, InertiaAppOptionsForCSR, PageResolver } from '@inertiajs/inertia-react';
import { PageProps } from '@inertiajs/inertia';
export interface InertiaFactory<SharedProps = PageProps> {
    (options: InertiaAppOptionsForCSR<SharedProps> & {
        resolve?: PageResolver;
        pages?: Record<string, () => unknown>;
    }): Promise<CreateInertiaAppSetupReturnType>;
}
declare const simpleInertiaApp: InertiaFactory;
export default simpleInertiaApp;
