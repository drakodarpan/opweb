import { Meteor } from 'meteor/meteor';
import { Messages } from '../import/api/messages.js';

import "../import/ui/components/messages.js";
import "../import/ui/components/message_item.js";
import "../import/ui/components/new_message.js";

Meteor.subscribe("messages",{
    onReady: function(){
        console.log("ready");
        console.log(Messages.find({}).count());
    }
});


// saveMessages.call({
//   content: 'como mola Meteor' ,
//   date: new Date()
// },(err, res) => {
//     if(err){
//         alert(err);
//     } else {
//         console.log("Mensaje guardado con Exito!!!");
//     }
// });

