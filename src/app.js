/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["that", "our", "the"];
  let adj = ["awesome", "brave", "long"];
  let noun = ["footballer", "doctor", "driver", "planet"];
  let extensions = ["org", "net", "com"];

  for (let item of pronoun) {
    for (let word of adj) {
      for (let object of noun) {
        for (let extension of extensions) {
          let _noun = object;
          // check if the last 3 characters of object are equals to the last 3 of variable extension
          if (_noun.slice(-3) == extension) {
            // if true we need to slice the last 3 characters of noun
            _noun = _noun.substring(0, _noun.length - 3);
            // if they dont match do not do anything
            // print the full domain
          }
          console.log(`${item}${word}${_noun}.${extension}`);
        }
      }
    }
  }
  // console.log("${item}${word}${_noun}.${extension}");
};
