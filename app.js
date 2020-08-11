var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogg','raco'];
var domain = ['.er', '.on'];

for (var i=0; i<pronoun.length; i++) {
    // var primero= pronoun[i]
    for (var a=0; a<adj.length; a++) {
        // var segunda = primero + adj[a]
        for (var n=0; n<noun.length; n++) {
            // var tercera = segunda + noun [n]
             for (var d=0; d<domain.length; d++) {
                //  var cuarta= tercera + domain[d]
                var cuarta= pronoun[i] + adj [a] + noun[n] +domain [d]
    console.log ('www.' + cuarta )
            }
        }
    }
}