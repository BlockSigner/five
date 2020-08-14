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

During dev the main page can be found at `http://localhost:3000/ch/de`

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

Our content repository is at [Lokalise](https://app.lokalise.com/project/581943505e9ff6d7ede045.97679425/?view=multi). Currently there is no direct way of exporting from Lokalise to a format that our i18n library accepts directly. This is due to the url based language selection. If the project starts having more regular content updates we should review and improve this process.

#### How-To:
1. Go to the Lokalise FIVE project [download page](https://app.lokalise.com/download/581943505e9ff6d7ede045.97679425/) (follow this link or, in the project page, click the icon with the red downwards arrow)
1. If you are exporting for the first time, choose the following options (they will be saved in future visits):
   - Format: `JSON (.json)`
   - Options: Enable `Unescape forward slashes` and `Add new line at EOF`
   - Plural format: `Symfony`
   - Order keys by: `Key name A-Z`
   - Identation: `2 spaces`
1. Click the `Preview` button
1. Copy and paste the entire content from each .json tab (`de_CH.json` and `en_CH.json`) to the respective files in your local machine (`locales/de_CH.js` and `locales/en_CH.js`) after the code `export default`
1. Prettify the files (if you use VS Studio Code that would be `CTRL+ALT+F` by default)
