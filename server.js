var root = __dirname;
var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.load();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var router = express.Router();
app.set('port', (process.env.PORT || 9000));
app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});

var sendkey = process.env.SECRET_KEY;
var sendgrid = require('sendgrid')(sendkey);

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');


app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));




app.post('/send', function(req, res) {
    var mail = req.body.mail;
    var message = req.body.message;

    var revString = mail.split('').reverse().join('');
    var rev = revString.slice(4, 9);
    var string = rev.split('').reverse().join('');

    if (string === 'yahoo') {
        res.send('Due to yahoo policy, yahoo doesnt allow third party email handlers to send email. So please enter an email address that is not yahoo.com');
    } else {

        var email = new sendgrid.Email({
            to: 'pradhanr03@gmail.com',
            from: mail,
            subject: 'Subject goes here',
            text: message
        });
    }

    sendgrid.send(email, function(err, json) {
        if (err) {
            return res.send('nope');
        }
        res.send('yay');
    });
});

app.get('/', function(req, res) {
    res.render('home');
});
