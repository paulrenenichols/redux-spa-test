import React, { Component, PropTypes } from 'react';
import  { getStore } from './../index.js'
import { routeState } from '../actions/routeState'

var routeTable = {
  byRouteState: {

  },
  byHash: {

  }
};

export function changeHash(routeState) {

  var routeDefinition = routeTable.byRouteState[routeState];

  if (!routeDefinition) {
    console.log('no route definition found for routeState: ', routeState);
    return;
  }

  window.location.hash = '#/' + routeDefinition.routeHash;
}

function stripHash(hash) {
  return hash.replace(/^#\/?|\/$/g, '').split('/');
}

export function routeHash(hash) {
  var strippedHash = stripHash(hash);

  // the strippedHash is an array.  We're just going to use the first
  // element in the array.

  var routeHash = strippedHash[0];

  console.log('routeHash: strippedHash: ', strippedHash);

  var routeDefinition = routeTable.byHash[routeHash];

  if (!routeDefinition) {
    console.log('no route found for hash: ', hash);
    return;
  }

  getStore().dispatch(routeState(routeDefinition.routeState));
}

export function registerRoute(routeDefinition) {
  routeTable.byHash[routeDefinition.routeHash] = routeDefinition;
  routeTable.byRouteState[routeDefinition.routeState] = routeDefinition;
}

export function routeStateContent(routeState, props) {
  var routeDefinition = routeTable.byRouteState[routeState];

  if (!routeDefinition) {
    console.log('no route definition found for routeState: ', routeState);
    return '';
  }

  if (routeDefinition.component) {
    return <routeDefinition.component {...props} />
  }
  else if (routeDefinition.content) {
    return routeDefinition.content;
  }
  else {
    return '';
  }
}

export function initializeRouter() {

  function hashChangeHandler(event) {
    routeHash(window.location.hash);
  }

  routeHash(window.location.hash);

  window.addEventListener('hashchange', hashChangeHandler , false);
}