function calcul (a,b){
    return a*b ;
    return a + b ;
}
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git add --all
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git commit -m "fonction"
[master c582517] fonction
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git branch exo2
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git checkout exo2
Switched to branch 'exo2'
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git add --all
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git commit -m "exo2"
[exo2 e2606ef] exo2
 1 file changed, 3 insertions(+), 1 deletion(-)
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git checkout master
Switched to branch 'master'
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git add --all       
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git commit -m "modification fonction"
[master d096100] modification fonction
 1 file changed, 3 insertions(+), 1 deletion(-)
 PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git merge exo2
Auto-merging jour 2/07-exo.js
CONFLICT (content): Merge conflict in jour 2/07-exo.js
Automatic merge failed; fix conflicts and then commit the result.
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git add --all
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami> git commit -m "resolution conflit"

[master b62e14b] resolution conflit
PS C:\Users\lakss\OneDrive\Bureau\git Lakssami>
