import replace from "replace-in-file";
import packageJson from "./package.json" assert { type: "json" };

console.log(`Updating README to reference version ${packageJson.version}`);
await replace({
  from: /@\d\.\d\.\d/g,
  to: `@${packageJson.version}`,
  files: "README.md",
});
console.log("Finished updating readme");
