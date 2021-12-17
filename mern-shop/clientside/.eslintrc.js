module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": 1,
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx", "js"] }], //should add ".ts" if typescript project
    }
};
