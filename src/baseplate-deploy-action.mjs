import { getInput, setFailed, getBooleanInput } from "@actions/core";
import { deploy } from "@baseplate-sdk/cli";

try {
  await deploy({
    baseplateToken: getInput("baseplate-token", { required: true }),
    dir: getInput("upload-dir", { required: true }),
    entry: getInput("entry-file", { required: true }),
    environmentName: getInput("environment-name", { required: true }),
    microfrontendName: getInput("microfrontend-name", { required: true }),
    autoVersion: getBooleanInput("auto-version", { required: false }),
  });
} catch (err) {
  console.error(err);
  setFailed(err.message);
}
