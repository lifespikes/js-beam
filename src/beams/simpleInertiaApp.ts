import {ReactNode} from 'react';
import {
  createInertiaApp,
  CreateInertiaAppSetupReturnType,
  InertiaAppOptionsForCSR,
  PageResolver,
} from '@inertiajs/inertia-react';
import resolvePageComponent from './rollupPageResolver';
import {PageProps} from '@inertiajs/inertia';

export interface InertiaFactory<SharedProps = PageProps> {
  (
    options: InertiaAppOptionsForCSR<SharedProps> & {
      resolve?: PageResolver;
      pages?: Record<string, () => unknown>;
    },
  ): Promise<CreateInertiaAppSetupReturnType>;
}

const simpleInertiaApp: InertiaFactory = (options) => {
  const defaultResolver = (name: string) =>
    resolvePageComponent(name, options.pages ?? {}) as ReactNode;

  const {resolve = defaultResolver, ...rest} = options;

  return simpleInertiaApp({
    ...options,
    resolve
  });
};

export default simpleInertiaApp;
