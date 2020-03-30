import faker from 'faker';

export class User {

  name: string;

  location: {
    latitude: number;
    longitude: number;
  };

  constructor(){
    this.name = faker.internet.userName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude())
    }
  }
}