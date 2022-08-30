module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['if', 'case']
      }
    ],
    'no-undef': 'off',
    'no-prototype-builtins': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 'error',
    'no-case-declarations': 'off',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-trailing-spaces': 'error',
    curly: 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/no-deprecated': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
};
