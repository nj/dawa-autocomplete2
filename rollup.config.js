// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
export default {
  entry: 'src/dawa-autocomplete-ng.js',
  moduleName: 'dawaAutocomplete',
  plugins: [
    resolve(),
    commonjs(),
    globals(),
    babel({
      "presets": [
        "es2015-rollup"
      ]
    })
  ],
  targets: [
    { dest: 'dist/dawa-autocomplete-ng.js', format: 'umd' },
    { dest: 'dist/dawa-autocomplete-ng.es.js', format: 'es' }
  ]
};
