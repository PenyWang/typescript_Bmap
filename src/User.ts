import faker from 'faker';

export default class User {

  content: string;
  longitude: number;
  latitude: number;

  constructor(content: string){
    this.content = content;
    this.longitude = 116.404;
    this.latitude = 39.915;
  }
}