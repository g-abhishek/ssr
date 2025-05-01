module.exports = {
  presets: [
    "@babel/preset-env", // Convert modern JS (ES6+) to older JS // Smartly decides which JavaScript features to compile based on browser/node targets.
    "@babel/preset-react", // Convert JSX to JS // Transforms JSX syntax (<div>Hello</div>) into React.createElement() calls.
  ],
};

/**
 * Babel does NOT bundle files — that's Webpack’s job.
 * Babel only transpiles code — makes the code "understandable" to the environment.
 */
