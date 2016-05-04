import { Meteor } from 'meteor/meteor';
import { Messages } from '../import/api/messages.js';

console.log(Messages.find({}).count());

Messages.insert({ content: 'Hola mundo' });

console.log( Messages.findOne({}) );

Meteor.subscribe("messages",{
    onReady: function(){
        console.log("ready");
        console.log(Messages.find({}).count());
    }
});