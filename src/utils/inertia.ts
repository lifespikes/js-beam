import {ReactNode} from 'react';
import {
  createInertiaApp,
  CreateInertiaAppSetupReturnType,
  InertiaAppOptionsForCSR,
  PageResolver,
} from '@inertiajs/inertia-react';
import resolvePageComponent from './resolve';
import {PageProps} from '@inertiajs/inertia';

export interface InertiaFactory<SharedProps = PageProps> {
  (
    pages: Record<string, () => unknown>,
    options: InertiaAppOptionsForCSR<SharedProps> & {
      resolve?: PageResolver;
    },
  ): Promise<CreateInertiaAppSetupReturnType>;
}

const createInertiaViteApp: InertiaFactory = (pages, {resolve, ...options}) => {
  const defaultResolver = (name: string) =>
    resolvePageComponent(name, pages) as ReactNode;

  return createInertiaApp({
    resolve: resolve || defaultResolver,
    ...options,
  });
};

export default createInertiaViteApp;
