import type { Root } from '@hapi/joi';
import { JSMinifier } from './types';

export function getSchemas(): Record<string, (Joi: Root) => any> {
  return {
    alias: (Joi) => Joi.object(),
    analyze: (Joi) => Joi.object(),
    autoCSSModules: (Joi) => Joi.boolean(),
    autoprefixer: (Joi) => Joi.object(),
    copy: (Joi) =>
      Joi.array().items(
        Joi.alternatives().try(
          Joi.string(),
          Joi.object().keys({
            from: Joi.string(),
            to: Joi.string(),
          }),
        ),
      ),
    define: (Joi) => Joi.object(),
    /*externals: (Joi) =>
      Joi
        .alternatives()
        .try(
          Joi
            .object()
            .pattern(/.+/, [
              Joi.string(),
              Joi.boolean(),
              Joi.object().pattern(/.+/, [Joi.string(), Joi.boolean()]),
            ]),
          Joi.string(),
          Joi.func().arity(3),
          Joi.object().regex(),
        ),*/
    extraBabelPlugins: (Joi) =>
      Joi.alternatives().try(
        Joi.string(),
        Joi.array().items(Joi.alternatives().try(Joi.string(), Joi.object())),
      ),
    extraBabelPresets: (Joi) =>
      Joi.alternatives().try(
        Joi.string(),
        Joi.array().items(Joi.alternatives().try(Joi.string(), Joi.object())),
      ),
    extraPostCSSPlugins: (Joi) => Joi.array(),
    extraVitePlugins: (Joi) => Joi.array(),
    hash: (Joi) => Joi.boolean(),
    inlineLimit: (Joi) => Joi.number(),
    manifest: (Joi) => Joi.boolean(),
    jsMinifier: (Joi) =>
      Joi.alternatives().try(
        Joi.string().valid(JSMinifier.esbuild, JSMinifier.terser),
        Joi.boolean(),
      ),
    jsMinifierOptions: (Joi) => Joi.object(),
    lessLoader: (Joi) =>
      Joi.object().keys({
        lessOptions: Joi.object(),
      }),
    legacy: (Joi) => Joi.alternatives().try(Joi.object(), Joi.boolean()),
    outputPath: (Joi) => Joi.string(),
    polyfill: (Joi) =>
      Joi.object().keys({
        imports: Joi.array().items(Joi.string()),
      }),
    postcssLoader: (Joi) =>
      Joi.object().keys({
        postcssOptions: Joi.object(),
      }),
    proxy: (Joi) => Joi.object(),
    publicPath: (Joi) => Joi.string(),
    svgr: (Joi) => Joi.object(),
    targets: (Joi) => Joi.object(),
  };
}
