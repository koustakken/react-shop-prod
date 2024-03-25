import { Configuration } from 'webpack';

import { BuildOptions } from "./types/config";

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {

  const { mode, paths, isDev } = options;

  return {
    // мод
    mode,
    // стартовая точка приложения
    entry: paths.entry,
    // точка сборки приложения
    output: {
      path: paths.build,
      filename: '[name].[hash].js',
      // очистка сборки
      clean: true
    },
    // плагины
    plugins: buildPlugins(options),
    // модули
    module: {
      rules: buildLoaders(options)
    },
    // расширения
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}