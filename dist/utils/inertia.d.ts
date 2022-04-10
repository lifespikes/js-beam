import { CreateInertiaAppSetupReturnType, InertiaAppOptionsForCSR, PageResolver } from '@inertiajs/inertia-react';
import { PageProps } from '@inertiajs/inertia';
export interface InertiaFactory<SharedProps = PageProps> {
    (pages: Record<string, () => unknown>, options: InertiaAppOptionsForCSR<SharedProps> & {
        resolve?: PageResolver;
    }): Promise<CreateInertiaAppSetupReturnType>;
}
declare const createInertiaViteApp: InertiaFactory;
export default createInertiaViteApp;
