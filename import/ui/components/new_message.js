import './new_message.html';
import { saveMessage } from '../../api/methods.js';

Template.newMessage.events({
    'click #send':function(e,t){
        saveMessage.call({
            content: t.find("#content").value,
            date: new Date()
        },(err, res) => {
          if (err) {
              console.log(err);
          } else {
              console.log(`Documento creado con id: ${res}`);
          }
        });
    }
});