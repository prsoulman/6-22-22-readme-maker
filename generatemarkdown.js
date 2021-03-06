function createLicenseBadge (license) {
    if (license === 'MIT') {
        return '[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
    }
    else if (license === 'Apache 2.0') {
        return '[![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)'
    }
    else {
        return '';
    }
}
function renderTech (techArray) {
    return techArray.map(tech => {
    return `* ${tech} `
    })
}
function generatemarkdown (data) {
return ` # ${data.project}
${createLicenseBadge(data.license)}
## Technologies 
*${renderTech(data.technologies)}*   

## Description
${data.project}


##Installation
${data.install}


##Contributors
${data.contributors}


##Tests
${data.tests}

![${data.alt}](${data.screenshot})
`
}


export default generatemarkdown;