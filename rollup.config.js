import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    excludeDependenciesFromBundle({ peerDependencies: true }),
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['useEffect']
      }
    })
  ]
}
