import React, {ReactNode} from 'react';
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
import {createRoot} from 'react-dom/client';

export interface InertiaSetup<T = PageProps> {
  (options: SetupOptions<HTMLElement, T>): CreateInertiaAppSetupReturnType;
}

export interface InertiaFactory<SharedProps = PageProps> {
  (
    options: {
      title?: HeadManagerTitleCallback;
      resolve?: PageResolver;
      id?: string;
      page?: Inertia.Page | string;
      render?: undefined;
      pages?: Record<string, () => unknown>;
      setup?: InertiaSetup<SharedProps>;
    }
  ): Promise<CreateInertiaAppSetupReturnType>;
}

const simpleInertiaApp: InertiaFactory = (options) => {
  const defaultResolver = (name: string) =>
    rollupPageResolver(name, options.pages ?? {}) as ReactNode;

  const defaultSetup: InertiaSetup = (
    {el, App, props}
  ) => createRoot(el).render(React.createElement(App, props));

  const {resolve, setup, pages, ...opts} = options;

  return createInertiaApp({
    ...opts,
    resolve: resolve ?? defaultResolver,
    setup: setup ?? defaultSetup,
  });
};

export default simpleInertiaApp;
