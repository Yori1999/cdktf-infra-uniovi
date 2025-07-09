import { cdktf } from "projen";
const project = new cdktf.ConstructLibraryCdktf({
  author: "María Flórez",
  authorAddress: "mariaf987@gmail.com",
  cdktfVersion: "^0.20.11",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.8.0",
  name: "cdktf-infra-uniovi",
  projenrcTs: true,
  repositoryUrl: "https://github.com/Yori1999/cdktf-infra-uniovi.git",
  prettier: true, // optional, but convenient
  tsconfig: {
    compilerOptions: {
      baseUrl: "src",
      paths: {
        "*": ["*"],
      },
    },
  },
  jestOptions: {
    jestConfig: {
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
      testEnvironment: "node",
    },
  },

  // Release configuration
  releaseToNpm: true,
  npmRegistryUrl: "https://npm.pkg.maria-uniovi-25.com",

  publishToPypi: {
    distName: "cdktf-infra-uniovi",
    module: "cdktf-infra-uniovi",
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

// Add dependencies for the cdktf providers we're going to be supporting
project.addPeerDeps(
  "constructs@>=10.3.0 <11.0.0",
  "@cdktf/provider-docker@11.x",
  "@cdktf/provider-aws@19.x",
);

project.addPackageIgnore("!infrastructure-assets/**"); // include this dir
project.npmignore?.addPatterns("!infrastructure-assets/**"); // override .npmignore default
project.packageTask.exec(
  "cp -r infrastructure-assets dist/infrastructure-assets",
);
project.compileTask.exec(
  "cp -r infrastructure-assets lib/infrastructure-assets",
);

project.synth();
