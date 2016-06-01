import "./messages.html";
import "./message_item.js";
import { Messages } from '../../api/messages.js';


Template.messages.helpers({
    messages:function(){
        return Messages.find();
    }
});