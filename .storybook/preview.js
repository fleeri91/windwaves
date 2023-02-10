import "../dist/output.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "1. Intro",
        "2. General",
        "3. Layout",
        "4. Navigation",
        "5. Data Entry",
        "6. Data Display",
        "7. Feedback",
      ],
    },
  },
};
