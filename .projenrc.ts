import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'María Flórez',
  authorAddress: 'mariaf987@gmail.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'cdktf-infra-uniovi',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mariaf987/cdktf-infra-uniovi.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();