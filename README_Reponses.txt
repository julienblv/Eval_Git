# Évaluation Git

- Prénom et nom : Blavette Julien
- Commentaires : .........................

## Exercices

- 1 point - Fourcher et cloner le dépôt

-  point - Remplir votre nom ci-dessus 

- 1 point - Reprendre dans master le commit de la branche `equality_refinement` via `cherry-pick`

- 1 point - Défaire le commit `remove unused subtract functions`

// j'ai eu une erreur que je n'ai pas pu résoudre dans ma console git je vous laisse les screens //

----> git reset 01877329

- 1 point - Fusionner dans `master` la branche `doc/intro`
-----> git checkcout doc/intro + git merge master

- 2 points - Fusionner dans `master` la branche `add_distance`
-----> git checkout master + git merge add_distance

- 1 point - Pousser le nouveau `master`
------> git push remote add_distance

- 2 points - Créer une branche sur le dernier `master`, créer une nouvelle fonction de calcul, la committer, et pousser cette nouvelle branche 

---> git branch new_branch
---> créer la fonction js
---> git commit -m "nouvelle fonction de calcul"
--->git push <"remote"> new_branch




- 2 points - Rebaser la branche `add_tests` sur `master`

-----> git checkout add_tests
-----> git merge master

- 1 point - Pousser la branche `add_tests` sur le dépôt distant
-----> git push <"remote"> add_tests

- 2 points - Ouvrir une merge request à partir de cette branche `add_tests` sur le dépôt source

X


## Questions

- Donner l’auteur du commit qui a introduit la fonction `add` dans ce projet : .....-----> jalil arfaoui
- Indiquer quelle commande utiliser, dans un projet Git,  pour changer le message du dernier commit ---> git commit --amend

- Quelle commande, inverse de `git add`, permet de retirer un fichier du stage (prochain commit) ?----> git rm --cached <"nom_du_fichier">


- Donner le nom du créateur de Git : ---> Linus Torvalds

- Indiquer la(les) différence(s) entre les commandes `git init` et `git clone` :

---> git init permet d'initialiser un dépot git tandis que git clone permets de récupérer ou de "cloner" un dépot local ou distant 