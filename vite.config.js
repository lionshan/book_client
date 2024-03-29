import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

export default {
  plugins: [
    /* ... */
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
};