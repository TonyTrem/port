import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json5 from './data.json5';

console.log(toml.title); // output: "TOML Example"
console.log(toml.owner.name); // output: "Tom Preston-Werner"

console.log(yaml.title); // output: "YAML Example"
console.log(yaml.owner.name); // output: "Tom Preston-Werner"

console.log(json5.title); // output: "JSON5 Example"
console.log(json5.owner.name); // output: "Tom Preston-Werner"

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());