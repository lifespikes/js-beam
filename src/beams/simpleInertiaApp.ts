import {ReactNode} from 'react';
import {
  createInertiaApp,
  CreateInertiaAppSetupReturnType, HeadManagerTitleCallback,
  InertiaAppOptionsForCSR,
  PageResolver, SetupOptions,
} from '@inertiajs/inertia-react';
import resolvePageComponent from './rollupPageResolver';
import {PageProps} from '@inertiajs/inertia';
import * as Inertia from '@inertiajs/inertia';

export interface InertiaFactory<SharedProps = PageProps> {
  (
    options: {
      title?: HeadManagerTitleCallback;
      resolve?: PageResolver;
      id?: string;
      page?: Inertia.Page|string;
      render?: undefined;
      pages?: Record<string, () => unknown>;
      setup(options: SetupOptions<HTMLElement, SharedProps>): CreateInertiaAppSetupReturnType;
    }
  ): Promise<CreateInertiaAppSetupReturnType>;
}

const simpleInertiaApp: InertiaFactory = (options) => {
  const defaultResolver = (name: string) =>
    resolvePageComponent(name, options.pages ?? {}) as ReactNode;

  const {resolve = defaultResolver, ...rest} = options;

  return createInertiaApp({
    ...options,
    resolve
  });
};

export default simpleInertiaApp;
