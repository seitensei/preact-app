module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'preact'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'react'
    ],
    rules: {
        'prettier/prettier': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-debugger': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
