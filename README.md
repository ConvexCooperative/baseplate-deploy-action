# baseplate-deploy-action

Github action for deploying to baseplate

## Usage

Within your Github Workflow yaml file, add the following.

```yml
# Replace 1.1.0 with the latest version found in CHANGELOG.md
uses: JustUtahCoders/baseplate-deploy-action@1.1.0
with:
  baseplate-token: ${{ secrets.BASEPLATE_TOKEN }}
  microfrontend-name: navbar
  environment-name: prod
  upload-dir: dist
  entry-file: main.js
```

### Inputs

#### baseplate-token

(string)

The Baseplate service account secret access key that authorizes the Github action to perform deployments.

#### microfrontend-name

(string)

The name of the microfrontend to deploy

#### environment-name

(string)

The name of the environment to deploy to

#### upload-dir

(string)

The file path (relative to cwd) of a directory that will be uploaded as part of the deployment. This directory should include JS, CSS, image, and other static frontend assets. Webpack defaults to putting the files inside of the `dist` folder.

#### entry-file

(string)

The file path (relative to `upload-dir`) of the main entry file for your microfrontend. This entry file goes into the import map and is the first file downloaded when your microfrontend is loaded in the browser.

### Outputs

This github action has no outputs
