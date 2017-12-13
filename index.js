"use strict"

require('dotenv').config();
const GitHubApi = require('github')

const token = process.env.PERSONAL_ACCESS_TOKEN
const owner = process.env.REPO_OWNER
const repo = process.env.REPO_NAME
const labels = require('./labels.json')
const github = new GitHubApi();

github.authenticate({
  type: 'token',
  token: token
})

github.issues.getLabels({
  owner,
  repo,
}).then(res => {
  const promises = res.data.map(x => github.issues.deleteLabel({
    owner,
    repo,
    name: x.name,
  }))
  return Promise.all(promises)
}).then(res => {
  const promises = labels.map(x => github.issues.createLabel({
    owner,
    repo,
    name: x.name,
    color: x.color,
  }))
  return Promise.all(promises)
}).then(res => {
  console.log('Done.')
  res.forEach(r => {
    console.log(`${r.data.name} : #${r.data.color}`)
  });
})

