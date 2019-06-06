import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stace-editor',
  bundles: [
     { components: ['stace-editor'] }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  excludeSrc: ['/test/', '**/.spec.', '/components/stace-editor-demo/'],
};
