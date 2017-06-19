'use strict';

exports.addPancake = function(args, res, next) {
  /**
   * Add a new pancake
   * 
   *
   * body Body Pancake object that needs to be added to the store
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "pancakeId" : 123456789,
  "name" : "aeiou",
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deletePancakeById = function(args, res, next) {
  /**
   * Delete pancake by ID
   * Delete a single pancake
   *
   * pancakeId Long ID of pancake to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.getPancakeById = function(args, res, next) {
  /**
   * Find pancake by ID
   * Returns a single pancake
   *
   * pancakeId Long ID of pet to return
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "pancakeId" : 123456789,
  "name" : "aeiou",
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updatePancake = function(args, res, next) {
  /**
   * Update an existing pancake
   * Pancake updated
   *
   * pancakeId Long ID of pet to return
   * body Body_1 Pancake object that updated
   * no response value expected for this operation
   **/
  res.end();
}

