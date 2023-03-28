//git add --all
//git commit -m "création objet js"
const a = {
    largeur : 20,
    hateur : 30,
    unite : "cm"
};

function calcul(){
    return `${a.largeur} x ${a.hauteur} = {a.largeur*a.heuteur}`
}

// on peut créer les branch et les renommer:
// git branch -M menu-principal
// git checkout master
// git checkout menu-principal
// git checkout menu

// git log --oneline 
// git merge menu : fusionner le fichier 8 et le fichier 9