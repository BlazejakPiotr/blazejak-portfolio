// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = { parser: 'typescript', trailingComma: 'es5', tabWidth: 2, semi: true, singleQuote: true, bracketSpacing: true, arrowParens: 'always', jsxSingleQuote: true, bracketSameLine: true, endOfLine: 'lf', plugins: ['prettier-plugin-tailwindcss'], printWidth: 80, experimentalTernaries: false, tailwindConfig: 'postcss.config.mjs', quoteProps: 'as-needed', proseWrap: 'always', htmlWhitespaceSensitivity: 'css', embeddedLanguageFormatting: 'auto', useTabs: false, requirePragma: false, insertPragma: false, vueIndentScriptAndStyle: false, singleAttributePerLine: true };

export default config;
