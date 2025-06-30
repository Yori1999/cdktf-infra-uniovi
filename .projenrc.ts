import { cdktf } from "projen";
const project = new cdktf.ConstructLibraryCdktf({
  author: "María Flórez",
  authorAddress: "mariaf987@gmail.com",
  cdktfVersion: "^0.20.11", //'^0.13.0',
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.8.0",
  name: "cdktf-infra-uniovi",
  projenrcTs: true,
  repositoryUrl: "https://github.com/Yori1999/cdktf-infra-uniovi.git",
  prettier: true, // optional, but convenient

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

// Add dependencies for the cdktf providers we're going to be supporting
project.addPeerDeps("@cdktf/provider-docker@11.x", "@cdktf/provider-aws@19.x");

project.synth();
