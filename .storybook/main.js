module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-knobs/register',
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
