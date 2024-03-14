/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        
        currentPopup = WA.ui.openPopup("clockPopup", "Hi it's popup ", []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

WA.room.area.onEnter("roof_office_area").subscribe(() => {     
WA.room.hideLayer("roof1");    }); 

WA.room.area.onLeave("roof_office_area").subscribe(() => {     
WA.room.showLayer("roof1");    }); 

WA.room.area.onEnter('phrase01').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase01Popup", "Hi. I am Rybot", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closePopup);

WA.room.area.onEnter('phrase02').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase02Popup", "Hi. I am Rybot", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closePopup);

WA.room.area.onEnter('phrase03').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase03Popup", "Room 01", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closePopup);

WA.room.area.onEnter('phrase04').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase04Popup", "Room 02", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closePopup);

WA.room.area.onEnter('phrase05').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase05Popup", "Our office accessible to our team members. You can book a meeting at the reception", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closePopup);

WA.room.area.onEnter('phrase06').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase06Popup", "Our office accessible to our team members. You can book a meeting at the reception", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closePopup);

WA.room.area.onEnter('phrase07').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase07Popup", "Hi. I am Rybot", []);
    })

    WA.room.area.onLeave('phrase07').subscribe(closePopup);

WA.room.area.onEnter('phrase08').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase08Popup", "Portal to the Ryco platform", []);
    })

    WA.room.area.onLeave('phrase08').subscribe(closePopup);


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
