module.exports = {
    rules: {
        "arrow-body-style": "off",
        "no-underscore-dangle": "off",
        "max-len": ["warn", 120],
        "guard-for-in": "off",
        "no-restricted-syntax": [
            "error",
            "DebuggerStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "no-param-reassign": "off",
        "key-spacing": ["error", { "align": "value" }]
    }
};