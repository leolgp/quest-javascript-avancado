import {baseUrl, eventQuantity} from '/src/scripts/variables.js'


async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
}

async function getUserEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventQuantity}`);
    return await response.json();
}

export {getUser, getUserEvents}