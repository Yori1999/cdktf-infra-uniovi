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
  // NPM
  releaseToNpm: true,

  // PyPI
  // The PYPI_TOKEN needs to be set in the repository secrets (do not follow CDKTF documentation regarding TWINE_PASSWORD AND TWINE_USERNAME)
  publishToPypi: {
    distName: "cdktf-infra-uniovi",
    module: "cdktf-infra-uniovi",
  },
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
