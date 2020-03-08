const angular = require('./angular.json');

const preset = 'conventionalcommits';

const libraries = Object.entries(angular.projects)
  .filter(([ , { projectType }]) => projectType === 'library')
  .map(([ project ]) => project.replace(/^@ngx-library\//, ''));

const branches = [
  {
    name: 'develop'
  }
];

const plugins = [
  ['@semantic-release/commit-analyzer', {
    'preset': preset,
    'releaseRules': [
      {'type': 'build', 'scope': 'deps', 'release': 'patch'}
    ]
  }],
  ['@semantic-release/release-notes-generator', {
    'preset': preset,
  }],
  '@semantic-release/changelog',
  ...libraries.map((title) => ['@semantic-release/npm', {
    'pkgRoot': `dist/@ngx-library/${title}`,
  }]),
  ...libraries.map((title) => ['@semantic-release/npm', {
    'npmPublish': false,
    'pkgRoot': `projects/${title}`,
  }]),
  ['@semantic-release/npm', {
    'npmPublish': false,
    'pkgRoot': '.',
  }],
  ["@semantic-release/git", {
    "assets": [
      'CHANGELOG.md',
      'package.json',
      ...libraries.map((title) => `projects/${title}/package.json`)
    ],
  }],
  '@semantic-release/gitlab'
];

module.exports = {
  branches,
  plugins
};
