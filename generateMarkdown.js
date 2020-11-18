// function to generate markdown for README 
function generateMarkdown(response) {
    return `
    
    # ${ response.Title };

    ## Table Of Contents
    * [Description](#Description);
    * [Installation](#Installation);
    * [Usage](#Usage);
    * [License](#License);
    * [Contributors](#Contributors);
    * [Test](#test);
    * [Questions](#questions);
    
    ## Description
    ${response.Description };

    ## Installation
    ${response.Install };

    ## Usage
    ${ response.Usage };

    ## License
    ${ response.License };

    ## Contributors
    ${ response.Contributors };

    ## Test
    ${ response.Test };

    ## Questions
    If you want to contact me:

    Github: [${ response.Github }](https:/github.com/genius-pending)

    Github: [${ response.Email }](https:/github.com/genius-pending)
    
`;}

module.exports = generateMarkdown