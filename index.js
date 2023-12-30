const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const message = function (request, response) {
    response.send('Welcum');
}

const testEjsView = (req, res) => {
    res.render('welcome');
}

const displayQcms = (req, res) => {

}

app.get('/welcum', message);

app.get('/', (request, response) => {
    const langages = ['PHP', 'Python', 'JS', 'SQL', 'HTML'];
    const langagesList = langages.map(langage => `<li><a href="/form/${langage}">${langage}</a></li>`).join('');

    const htmlContent = `
        <h1>Bienvenue</h1>
        <ul>${langagesList}</ul>
    `;

    response.send(htmlContent);
});

app.get('/form/:langage', (req, res) => {
    const langage = req.params.langage;

    let formTemplate = '';
    switch (langage) {
        case 'PHP':
            formTemplate = `
                <h2>Quiz sur ${langage}</h2>
                <form action="/submit" method="post">
                    <label>Que signifie PHP?</label><br>
                    <input type="radio" name="phpQuestion1" value="a" required> a) Page d'accueil personnelle<br>
                    <input type="radio" name="phpQuestion1" value="b" required> b) Préprocesseur hypertexte<br>
                    <input type="radio" name="phpQuestion1" value="c" required> c) PHP: Langage de balisage hypertexte<br>
                    <br>
        
                    <label>Quelle fonction est utilisée pour se connecter à une base de données MySQL en PHP?</label><br>
                    <input type="radio" name="phpQuestion2" value="a" required> a) mysql_connect()<br>
                    <input type="radio" name="phpQuestion2" value="b" required> b) mysqli_connect()<br>
                    <input type="radio" name="phpQuestion2" value="c" required> c) connect_mysql()<br>
                    <br>
        
                    <label>Que fait la fonction "echo" en PHP?</label><br>
                    <input type="radio" name="phpQuestion3" value="a" required> a) Affiche une sortie<br>
                    <input type="radio" name="phpQuestion3" value="b" required> b) Récupère des données de la base de données<br>
                    <input type="radio" name="phpQuestion3" value="c" required> c) Effectue des opérations mathématiques<br>
                    <br>
        
                    <input type="submit" value="Soumettre">
                </form>
            `;
            break;

        case 'Python':
            formTemplate = `
                 <h2>Quiz sur ${langage}</h2>
                        <form action="/submit" method="post">
                            <label>Qu'est-ce que Python?</label><br>
                            <input type="radio" name="pythonQuestion1" value="a" required> a) Un serpent<br>
                            <input type="radio" name="pythonQuestion1" value="b" required> b) Un langage de programmation<br>
                            <input type="radio" name="pythonQuestion1" value="c" required> c) Un type de café<br>
                            <br>
                
                            <label>Quel mot-clé est utilisé pour définir une fonction en Python?</label><br>
                            <input type="radio" name="pythonQuestion2" value="a" required> a) define<br>
                            <input type="radio" name="pythonQuestion2" value="b" required> b) def<br>
                            <input type="radio" name="pythonQuestion2" value="c" required> c) function<br>
                            <br>
                
                            <label>Quel est le but de l'instruction "if" en Python?</label><br>
                            <input type="radio" name="pythonQuestion3" value="a" required> a) Bouclage<br>
                            <input type="radio" name="pythonQuestion3" value="b" required> b) Prise de décision<br>
                            <input type="radio" name="pythonQuestion3" value="c" required> c) Affichage<br>
                            <br>
                
                            <input type="submit" value="Soumettre">
                        </form>
                    `;
                    break;
                

                    case 'JS':
                        formTemplate = `
                            <h2>Quiz sur ${langage}</h2>
                            <form action="/submit" method="post">
                                <label>Qu'est-ce que JavaScript?</label><br>
                                <input type="radio" name="jsQuestion1" value="a" required> a) Un type de café<br>
                                <input type="radio" name="jsQuestion1" value="b" required> b) Un langage de programmation côté client<br>
                                <input type="radio" name="jsQuestion1" value="c" required> c) Un nouveau navigateur Web<br>
                                <br>
                    
                                <label>Quelle est la méthode pour déclarer une variable en JavaScript?</label><br>
                                <input type="radio" name="jsQuestion2" value="a" required> a) var<br>
                                <input type="radio" name="jsQuestion2" value="b" required> b) variable<br>
                                <input type="radio" name="jsQuestion2" value="c" required> c) int<br>
                                <br>
                    
                                <label>Quelle est la fonction de l'instruction "if" en JavaScript?</label><br>
                                <input type="radio" name="jsQuestion3" value="a" required> a) Répétition<br>
                                <input type="radio" name="jsQuestion3" value="b" required> b) Prise de décision<br>
                                <input type="radio" name="jsQuestion3" value="c" required> c) Connexion à la base de données<br>
                                <br>
                    
                                <input type="submit" value="Soumettre">
                            </form>
                        `;
                        break;
                    

                        case 'SQL':
                            formTemplate = `
                                <h2>Quiz sur ${langage}</h2>
                                <form action="/submit" method="post">
                                    <label>Que signifie SQL?</label><br>
                                    <input type="radio" name="sqlQuestion1" value="a" required> a) Structured Task Language<br>
                                    <input type="radio" name="sqlQuestion1" value="b" required> b) Simple Transfer and Query Language<br>
                                    <input type="radio" name="sqlQuestion1" value="c" required> c) Structured Query Language<br>
                                    <br>
                        
                                    <label>Quelle clause est utilisée pour filtrer les résultats d'une requête SELECT?</label><br>
                                    <input type="radio" name="sqlQuestion2" value="a" required> a) WHERE<br>
                                    <input type="radio" name="sqlQuestion2" value="b" required> b) FROM<br>
                                    <input type="radio" name="sqlQuestion2" value="c" required> c) SELECT<br>
                                    <br>
                        
                                    <label>Quelle fonction est utilisée pour regrouper les résultats d'une requête SELECT en SQL?</label><br>
                                    <input type="radio" name="sqlQuestion3" value="a" required> a) GROUP BY<br>
                                    <input type="radio" name="sqlQuestion3" value="b" required> b) ORDER BY<br>
                                    <input type="radio" name="sqlQuestion3" value="c" required> c) HAVING<br>
                                    <br>
                        
                                    <input type="submit" value="Soumettre">
                                </form>
                            `;
                            break;
                        

                            case 'HTML':
                                formTemplate = `
                                    <h2>Quiz sur ${langage}</h2>
                                    <form action="/submit" method="post">
                                        <label>Que signifie HTML?</label><br>
                                        <input type="radio" name="htmlQuestion1" value="a" required> a) HyperText Markup Language<br>
                                        <input type="radio" name="htmlQuestion1" value="b" required> b) High-Level Text Markup Language<br>
                                        <input type="radio" name="htmlQuestion1" value="c" required> c) Hyperlink and Text Markup Language<br>
                                        <br>
                            
                                        <label>Quel élément HTML est utilisé pour créer une liste non ordonnée?</label><br>
                                        <input type="radio" name="htmlQuestion2" value="a" required> a) &lt;ol&gt;<br>
                                        <input type="radio" name="htmlQuestion2" value="b" required> b) &lt;ul&gt;<br>
                                        <input type="radio" name="htmlQuestion2" value="c" required> c) &lt;li&gt;<br>
                                        <br>
                            
                                        <label>Quelle balise HTML est utilisée pour créer un lien hypertexte?</label><br>
                                        <input type="radio" name="htmlQuestion3" value="a" required> a) &lt;link&gt;<br>
                                        <input type="radio" name="htmlQuestion3" value="b" required> b) &lt;a&gt;<br>
                                        <input type="radio" name="htmlQuestion3" value="c" required> c) &lt;url&gt;<br>
                                        <br>
                            
                                        <input type="submit" value="Soumettre">
                                    </form>
                                `;
                                break;
                            
        default:
            res.status(404).send('QCM not found');
            return;
    }

    res.send(formTemplate);
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    res.send('Vous avez rempli le questionnaire.');
});

app.listen(port, () => {
    console.log(`Ecoute sur http://localhost:${port}`);
});
