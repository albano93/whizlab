expots.handler = function (event, context, callback) {
    var whizlabstring = require ('xml2js').parseString;
    var xml = "<root>A Sample XML Object</root>"
    whizlabstring (xml, function(err, result){
        console.dir(result)
    });
};