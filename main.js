const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const app = express();
app.disable('x-powered-by');
const router = express.Router();
const server = app.listen(process.env.PORT || 3001, () => { console.log(`[Express] Service Started Sucessfully`) }) 

//todo: add .env
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')
app.set('views', __dirname + '\\site\\views');
app.use("/", router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static('./site/public'))

app.get('/', async function(request, response) {
    response.render('index', { title: "HumanOS" })
})

process.on('uncaughtException', (err, origin) => {
    console.log(err);
});