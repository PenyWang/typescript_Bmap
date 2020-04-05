import {User} from './User';
import {Company} from './Company';
// import Map from './Map';

console.log(new User());
console.log(new Company());

var map = new BMap.Map("map");  
var point = new BMap.Point(116.404, 39.915);
// new BMap.Marker
map.centerAndZoom(point, 15); 
