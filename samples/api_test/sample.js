require('new-relic-synthetics-manager');
//----- Add synthetic code below this line


var options = {
    //Define endpoint URI
    uri: 'https://api.github.com/users/yodle',
    //Define query key and expected data type.
    headers: {
    'Accept': 'application/vnd.github.v3+json'
}
};

//Define expected results using callback function.
function callback (err, response, body){
//Log JSON results from endpoint to Synthetics console.
 console.log(JSON.parse(body)); 
 console.log('done with script');
}

//Make GET request, passing in options and callback.
$http.get(options,callback);