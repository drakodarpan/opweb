import './message_item.html';
import moment from 'moment';
require("moment/locale/es");

Template.messageItem.helpers({
    formattedDate:function(){
        return moment(this.createdAt).fromNow();
    }
});