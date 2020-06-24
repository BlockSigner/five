# 5️⃣ five

> The video ident checkpoint

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Prerequisite: Install commitizen globally

Let's try to use commitizen for repo commits. Organised commit messages make it
easier to read and find certain commits. See https://github.com/commitizen/cz-cli#conventional-commit-messages-as-a-global-utility for a more detailed
description.

```bash
# Install commitizen
$ npm install -g commitizen

# Then install commitizen adapter
$ npm install -g cz-conventional-changelog

# Then create a .czrc file
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

## Importing locales

Our content repository is at [Lokalise](https://app.lokalise.com/project/581943505e9ff6d7ede045.97679425/?view=multi). Currently there is no direct way of exporting from Lokalise to a format that our i18n library accepts directly. If five's content start having regular updates this should be reviewed and improved in the future.

#### How-To:
1. Go to the Lokalise FIVE project [download page](https://app.lokalise.com/download/581943505e9ff6d7ede045.97679425/) (follow the link or click on the icon with the red downwards arrow)
1. If you are exporting for the first time, choose the following options (they will be saved in future visits):
   - Format: `JSON (.json)`
   - Options: Enable `Unescape forward slashes` and `Add new line at EOF`
   - Plural format: `Symfony`
   - Identation: `2 spaces`
1. Click the `Preview` button
1. Copy and paste the entire content from each .json tab (`de_CH.json` and `en_CH.json`) to the respective files (`de_CH.js` and `en_CH.js`) after the code `export default`
1. Prettify the files (if you use VS Studio Code that would be `CTRL+ALT+F` by default)