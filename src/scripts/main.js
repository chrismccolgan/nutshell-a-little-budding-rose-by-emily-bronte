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


import API from './chores/choresComponent.js';

////////////////////////////////////////////////////////

const allChores = () => {
    // GET
    API.getAllChores()
    .then((chores) => {
        console.log(chores);
    })
}


allChores();
makeChoreList();

const clearInputs = () => {
    document.querySelector("#id").value = "";
    document.querySelector("#choreName").value = "";
    document.querySelector("#choreDate").value = "";
    document.querySelector("#choreCompleted").value = "";

}

saveChoreButton.addEventListener("click", event => {
    const hiddenChoreId = document.querySelector("id");

    if (hiddenChoreId.vaule !== "") {
        const choreNameInput = document.querySelector("choreName").value;
        const choreDateInput = document.querySelector("choreDate").value;
        const choreCompleteInput = document.querySelector("choreComplete").value;
        //name, date, completed
        API.updateChore(hiddenChoreId.value, makeChore(choreNameInput, choreDateInput, choreCompleteInput))
        .then(() => {
            clearInputs();
            makeChoreList();
        });
    } else {
        // save functionality
        console.log("gee i hope this saves")
    }
})