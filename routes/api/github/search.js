const router  = require("express").Router();
const axios = require("axios");

const Token = require("../../../models/Token.js");

function objToQueryParams(obj) {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((a,c,i) => {
    a += `${c}=${obj[c]}`;
    a += (i === keys.length - 1) ? "" : "&";
    return a;
  }, "?");
}

const usersRoute = (term, token) => {
  const usersOptions = { type: "all", sort: "updated", direction: "desc", access_token: token };
  return `https://api.github.com/users/${term}/repos${objToQueryParams(usersOptions)}`;
}

const orgsRoute = (term, token) => {
  const orgsOptions = { type: "all", access_token: token };
  return `https://api.github.com/orgs/${term}/repos${objToQueryParams(orgsOptions)}`;
}

const reposRoute = (term, token) => {
  const reposOptions = { q: term, sort: "updated", order: "desc", access_token: token };
  return `https://api.github.com/search/repositories${objToQueryParams(reposOptions)}`
}

const Repo = require("../../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) => {
    Token.findOne({ github_id: req.user.github_id })
         .then(e => {
           let url = routHand(req.params.term, e.token);
           console.log(url);
           axios.get(url)
             .then(function (resp) {
               const source = resp.data.items || resp.data;
               const repos = source.map(e => new Repo(e));
               res.json(repos);
             })
             .catch((err) => {
               console.log(err);
               res.json(err);
             })
         });
  }
}

router.route("/users/:term")
  .get(handlerGen(usersRoute));

router.route("/orgs/:term")
  .get(handlerGen(orgsRoute));

router.route("/repos/:term")
  .get(handlerGen(reposRoute));

module.exports = router;
