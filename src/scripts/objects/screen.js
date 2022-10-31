const screen = {
    userProfile : document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class= 'info'>
        <img src="${user.avatarUrl}" alt = 'foto do perfil do usuário' />
        <div class='data'>
        <h1>${user.name ?? 'Não possui nome cadastrado😢.'}</h1>
        <p> ${user.bio ?? 'Não possui bio cadastrada😒.'}</p>
        <p> Seguidores: ${user.followers ?? 'Não possui seguidores🤦‍♂️.'}</p>
        <p> Seguindo: ${user.following ?? 'Não está seguindo ninguém🤷‍♀️.'}</p>
        </div>
        </div>`

    let repositoryItens = ''
    user.repositories.forEach( repo => repositoryItens += `
    <li> <a href='${repo.html_url}' target='_blank'> ${repo.name} 
    <div class='icones'> 
    <span>🍴 ${repo.forks}</span>
    <span>⭐ ${repo.stargazers_count} </span>
    <span>👀 ${repo.watchers_count} </span>
    <span>📖 ${repo.language} </span>
    </div></a>  </li>` )
       
    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class='repositories section'> 
                                       <h2> Repositórios </h2>
                                       <ul> ${repositoryItens} </ul>
                                       </div>`
        }

    let userEvents = ''
    user.events.forEach ( event => userEvents += `
    <li> ${event.repo.name}' - ${event.type} </li>`)

    
    this.userProfile.innerHTML += `<div class='events'><h2> Eventos </h2>
                                    <ul> ${userEvents}</ul></div>`
    
    },
        
  
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3> Usuário não encontrado.🤷‍♀️</h3>"
    }
    

}

export { screen }