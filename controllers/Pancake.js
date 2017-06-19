'use strict';

var url = require('url');

var Pancake = require('./PancakeService');

module.exports.addPancake = function addPancake (req, res, next) {
  Pancake.addPancake(req.swagger.params, res, next);
};

module.exports.deletePancakeById = function deletePancakeById (req, res, next) {
  Pancake.deletePancakeById(req.swagger.params, res, next);
};

module.exports.getPancakeById = function getPancakeById (req, res, next) {
  Pancake.getPancakeById(req.swagger.params, res, next);
};

module.exports.updatePancake = function updatePancake (req, res, next) {
  Pancake.updatePancake(req.swagger.params, res, next);
};
