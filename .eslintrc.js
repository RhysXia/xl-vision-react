module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  settings: {
    react: {
      version: '16.8'
    }
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parserOptions: {
        ecmaVersion: 2018
      },
      plugins: [],
      extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
      rules: {}
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier/react',
        'prettier',
        'prettier/@typescript-eslint'
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:react/recommended',
        // 'plugin:prettier/recommended',
        // 'prettier/standard',
      ],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'site/**',
              'test/**',
              'scripts/**',
              '**/__test__/**',
              '*.config.js',
              '**/*.mdx'
            ]
          }
        ],
        'no-plusplus': 'off',
        'import/no-cycle': 'off',
        'no-param-reassign': ['error', {
          props: false
        }],
        'no-nested-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-multi-assign': 'off',
        'react/forbid-prop-types': 'off', // todo remove
        'react/jsx-boolean-value': ['error', 'always'],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic'
          }
        ],

        // 'react/display-name': 'error',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
        // '@typescript-eslint/no-explicit-any': 'error',
        // '@typescript-eslint/no-unsafe-member-access': 'off',
        // '@typescript-eslint/no-unsafe-assignment': 'off',
        // '@typescript-eslint/no-unsafe-return': 'error',
        // '@typescript-eslint/no-unsafe-call': 'error',
        // '@typescript-eslint/restrict-plus-operands': [
        //   'error',
        //   {
        //     checkCompoundAssignments: true
        //   }
        // ],
        // '@typescript-eslint/restrict-template-expressions': 'error',
        // '@typescript-eslint/no-floating-promises': 'error'
      }
    }
  ]
}
