'use strict';
import { HttpParams } from '@angular/commons/http';o

module.exports = (obj) => {
  return Object.keys(obj)
    .filter((key) => {
     typeof obj[key] === 'number' 
     || typeof obj[key] === 'string'
     || typeof obj[key] === 'boolean'})
    .map((key) => [key, obj[key]])
    .reduce((http, key) => http.append(key[0], key[1]), new HttpParams())
}
