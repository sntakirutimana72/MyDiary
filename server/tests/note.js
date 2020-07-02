import chai from 'chai';
import server from '../server';
import chaiHttp from 'chai-http';
import credentials from './credentials';

const { expect } = chai;
chai.use(chaiHttp);

function addEntry() {
  const entry1 = {
    title: "I met her today", 
    details: "You know I left here planning to go by her house..", 
    audio_records: []
  };

  const entry2 = {
    title: "I met him today", 
    details: "You know I left here planning to go shoping..", 
    audio_records: []
  };
}

function updateEntry() {
  const update1 = {
    title: "She run into me today", 
    details: "I was walking fast when she bumped into me like a ghost.."
  }

  const update2 = {
    title: "She said it loud"
  }
}

function deletEntry() {}

export default function () {
  console.log('Just reached into tests folder environment');
}
