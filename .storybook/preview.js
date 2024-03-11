import '../dist/output.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['1. Documentations', '2. Theme', '3. Layout', '4. Library', ['Atoms', 'Molecules', 'Organisms']],
    },
  },
}
