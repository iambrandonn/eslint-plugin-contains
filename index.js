module.exports = {
  rules: {
    "contains": function (context) {
      if (context.options.length === 1) {
        var options = context.options[0];
        if (!options.toFind || !options.errorMessage) {
          return {};
        }

        var sourceCode = context.getSourceCode();
        var fileContent = sourceCode.getText();

        if (fileContent.indexOf(options.toFind) !== -1) {
          context.report({
            message: options.errorMessage,
            loc: {
              line: 1,
              col: 1
            }
          });
        }
      }

      return {};
    }
  }
};
