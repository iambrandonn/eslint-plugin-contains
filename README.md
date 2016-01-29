# eslint-plugin-contains

An ESLint rule which will search for a given string and fail with the given error if not found

## To use:

#### Install the plugin
`npm install eslint-plugin-contains --save-dev`

#### Modify your .eslintrc file:
* Add the plugin to the plugins array like this:
```
    "plugins": [
        "contains"
    ]
```
* Add the rule to the rules object like this:
```
    "rules": {
        "contains/contains": [2, { "toFind": "this is the text to look for", "errorMessage": "An appropriate error message when not found"} ]
    }
```

Now verify the rule is checking as desired.
