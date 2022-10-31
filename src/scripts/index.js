import { getUser, getUserEvents } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
   if(validateEmptyInput(userName)) return 
            getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed){
        if(validateEmptyInput(userName)) return 
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('preencha com nome do usuário do Github')
        return true
    }
}

async function getUserData(userName){
    const userResponse = await getUser(userName)
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }
    const userEventsResponse = await getUserEvents(userName)

    const repositoryResponse = await getRepositories(userName)


    user.setInfo (userResponse)
    user.setRepositories (repositoryResponse)
    user.setEvents(userEventsResponse)

    screen.renderUser(user)
    console.log(user);
}