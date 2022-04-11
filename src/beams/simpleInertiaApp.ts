import {ReactNode} from 'react';
import {
  createInertiaApp,
  CreateInertiaAppSetupReturnType,
  HeadManagerTitleCallback,
  PageResolver,
  SetupOptions,
} from '@inertiajs/inertia-react';
import rollupPageResolver from './rollupPageResolver';
import * as Inertia from '@inertiajs/inertia';
import {PageProps} from '@inertiajs/inertia';

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
    rollupPageResolver(name, options.pages ?? {}) as ReactNode;

  const {resolve, pages, ...opts} = options;

  return createInertiaApp({
    ...opts,
    resolve: resolve ?? defaultResolver
  });
};

export default simpleInertiaApp;
