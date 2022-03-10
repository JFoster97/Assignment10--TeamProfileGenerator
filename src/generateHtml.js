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