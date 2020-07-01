import messagesAPI from "./messages/messagesData.js"
import messageList from "./messages/messagesList.js"
import makeChore from "./chores/choresData.js"
import makeChoreList from "./chores/choresList.js"
import messageEventListener from "./messages/messageEvents.js"
import userButtons from "./users/usersList.js"
import  { newsButtons, showNewsEntries } from "./news/newsList.js"

userButtons.logIn()
userButtons.register()

showNewsEntries()
newsButtons.save()
newsButtons.deleteEdit()

messagesAPI.messagesGetData()
.then(() => {
    messageList();
})
messageEventListener()

import eventsAPI from './events/eventsData.js';
import eventEntryForms from "./events/eventsList.js"
import eventListeners from "./events/eventsEventListeners.js"

eventsAPI.getAllEvents ()
    .then(eventEntryForms.makeEventList)


eventListeners.deleteEventEntry()
eventListeners.editEventEntry()
eventListeners.saveEventEntry()
eventListeners.createNewEventEntry()

import API from './chores/choresComponent.js';

////////////////////////////////////////////////////////

const allChores = () => {
    // GET
    API.getAllChores()
    .then((chores) => {
        console.log(chores);
    })
}

// //id, name, date, completed
// const newChore3 = makeChore(3, "Make Dinner", "06-29-20", true);

// // POST
// API.addAChore(newChore3)
// .then(() => {
//     allChores();
// });

allChores();
makeChoreList();
