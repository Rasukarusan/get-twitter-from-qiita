const $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow)
const fetch = require('node-fetch')
if (process.argv.length < 3) {
    console.log('Please input target URL');
    console.log('Usage: $ node main.js https://qiita.com/organizations/{organization_name}');
    return;
}
let organizationUrl = process.argv[2]

fetch(organizationUrl)
.then(res => res.text())
.then(body => {
    let bodyHtml = body.toString();
    $(bodyHtml).find('.op-Members_member').each(function(_, element) {
        let user = $(element).find('a').attr('href')
        let url = 'https://qiita.com' + user
        $.ajax({
            url: url,
            type: 'GET',
        })
        .done((response) => {
            let twitterUrl = $(response).find('.newUserPageProfile_socialLink-twitter').find('a').attr('href')
            if( typeof twitterUrl !== 'undefined'){
                console.log(twitterUrl)
            }
        })
    })
})
