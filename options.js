// Saves options to localStorage.
function save_options() {
  var githubHostField = document.querySelector("#github-host");
  localStorage.setItem('githubHost', githubHostField.value);

  var githubApiHostField = document.querySelector("#github-apihost");
  localStorage.setItem('githubApiHost', githubApiHostField.value);

  var accessTokenField = document.querySelector("#access-token");
  localStorage.setItem('accessToken', accessTokenField.value);

  var refreshRate = document.querySelector("#refresh-rate");
  localStorage.setItem('refreshRate', refreshRate.value);

  var assignedToMe = document.querySelector("#assigned-to-me");
  localStorage.setItem('assignedToMe', assignedToMe.checked);

  var fetchAllRepos = document.querySelector("#fetch-all-repos");
  localStorage.setItem('fetchAllRepos', fetchAllRepos.checked);
  localStorage.removeItem('repos');

  // Update status to let user know options were saved.
  var status = document.querySelector(".status");
  status.innerHTML = "saved";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var githubHost = localStorage.getItem('githubHost');
  var githubHostField = document.querySelector("#github-host");
  githubHostField.value = githubHost;

  var githubApiHost = localStorage.getItem('githubApiHost');
  var githubApiHostField = document.querySelector("#github-apihost");
  githubApiHostField.value = githubApiHost;

  var accessToken = localStorage.getItem('accessToken');
  var accessTokenField = document.querySelector("#access-token");
  accessTokenField.value = accessToken;

  var refreshRate = localStorage.getItem('refreshRate');
  var refreshRateField = document.querySelector("#refresh-rate");
  refreshRateField.value = refreshRate;

  var assignedToMe = localStorage.getItem('assignedToMe');
  var assignedToMeField = document.querySelector("#assigned-to-me");
  assignedToMeField.checked = (assignedToMe === "true");

  var fetchAllRepos = localStorage.getItem('fetchAllRepos');
  var fetchAllReposField = document.querySelector("#fetch-all-repos");
  fetchAllReposField.checked = (fetchAllRepos === "true");
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('.save').addEventListener('click', save_options);

var app = angular.module('App', []);
app.controller('MainCtrl', function($scope) {

  $scope.repositories = JSON.parse(window.localStorage.repositories);
  $scope.githubHost = window.localStorage.githubHost != "" ? window.localStorage.githubHost : 'https://github.com';
});
