import typescript from "@typescript-eslint/eslint-plugin";
import playwright from "eslint-plugin-playwright";
import typescriptParser from "@typescript-eslint/parser";
const { configs: typescriptConfigs } = typescript;

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": typescript,
      "playwright": playwright
    },
    ignores: ["node_modules/**", "playwright-report/**", "test-results/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {
      ...typescriptConfigs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      "no-console": "warn",
    }
  }
];