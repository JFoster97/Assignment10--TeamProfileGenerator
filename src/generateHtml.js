
// create the html head tab
function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container-fluid header-div bg-danger text-white">
            <header class="d-flex justify-content-center py3">
                <h1>My Team</h1>
            </header>
        </div>
    
        <div class="container">
            <div class="row justify-content-center">
                ${generateCards(data)}
            </div>
        </div>
    </body>
    </html>`;
}

function generateManagerCard(manager) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item"><a href="mailto: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>  
    </div>
  </div>`
}

function generateInternCard(intern) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item"><a href="mailto: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>  
    </div>
  </div>`
}

function generateEngineerCard(engineer) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item"><a href="mailto: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: https://github.com/${engineer.getGithub()}</li>
      </ul>  
    </div>
  </div>`
}

// push array to page 
generateCards = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const teammate = data[i];
        const position = teammate.getRole(); 


        if (position === 'Manager') {
            const managerCard = generateManagerCard(teammate);

            pageArray.push(managerCard);
        }

        if (position === 'Engineer') {
            const engineerCard = generateEngineerCard(teammate);

            pageArray.push(engineerCard);
        }
 
        if (position === 'Intern') {
            const internCard = generateInternCard(teammate);

            pageArray.push(internCard);
        }
        
    }
    const memberCard = pageArray.join('')

    const generateTeam = generateCards(memberCard);
    return generateTeam;
}

module.exports = generateHtml;