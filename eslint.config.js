import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
//TODO: add GTS --> import * as gts from 'gts';

export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  //TODO: add GTS --> gts,
  {
    ignores: ['dist/**/*', 'node_modules/**/*', 'postcss.config.cjs', 'tailwind.config.cjs'],
  },
];
