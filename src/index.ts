import faker from 'faker';
import User from './User';
import Company from './Company';
import MyMap from './MyMap';

let myMap = new MyMap(116.404 + "", 39.915 + "");
myMap.render('container', 5.5);
myMap.addMarker(new User('i am a user'));
myMap.addMarker(new Company('i am a company'));