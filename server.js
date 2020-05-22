const app = express();

app.use(express.static(__dirname+'/dist/front-colors'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/front-colors/index.html'));
});

app.listen(process.env.PORT || 8080);