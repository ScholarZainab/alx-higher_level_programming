#!/usr/bin/node
const argc = process.argv.length;
const myVar ="No Argument";
if (argc > 2) {
  console.log('Argument' + (argc > 3 ? 's' : '') + ' found');
} else {
  console.log('No argument');
}
