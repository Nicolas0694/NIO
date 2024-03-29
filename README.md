# NIO

## Synopsis

NIO est un jeu de type plateforme dans lequel le héros de meme nom pars à la recherche de la chèvre astrale Gaia afin de detérminer le sens de l'existence. Il traversera plusieurs plans astraux , après avoir quitter la Terre , pour collecter différents objets lui donnant accès à la dimension de Gaia.

## Niveaux 

Le jeu est structuré en 5 niveaux à compléter dans l'ordre pour débloquer des objets "clés" le niveau 6 correspondant à la dimension de Gaia.

## Modules

Page d'accueil : bouton START => Accès au choix des niveaux.

Schéma des niveaux: Le jeu se compose de 6 niveaux, 5 ou le but est de récuperer un objet à la fin et ayant chacun un thème particulier. Dans l'ordre les thèmes seront : la ville (de jour), le ciel, l'espace (terre/lune), l'espace (martiens), et l'espace "vide" (se finit dans un trou noir). La difficulté sera croissante, à chaque nouveau niveau un obstacle fera son apparition (platformes temporaires, martiens venant a l'horizontale). Le denier niveau, débloqué une fois les 5 objets récupérées, sera un boss fight qui clotura le jeu.

Les niveaux se font à la verticale et la vitesse de progression est laissée pour choix au joueur. Les 5 premiers niveaux feront chacun environ 2min50s et le dernier entre 2min50 et 5min celui-ci étant un boss fight.

Le joueur sélectionne un niveau pour le lancer, et le suivant se débloque une fois celui d'avant terminé. Quand un des objets est récupéré il vient s'ajouter au ménu principal de séléction des niveaux, le joueur pourra ainsi suivre sa progression à travers les objets obtenus.

## Interêts techniques 

* Utilisation de images png composés de sprites 16*16px rendant simple l'ajout et modification des graphismes utilisés
* Création de nouveaux niveaux facile ainsi que la modification de l'environment graphique de ceux-ci grâce aux sprites
* Progression des niveaux enregistré dans le navigateur client (localStorage)
* Création de skins pour le personnage jouable facilité
* Architecture des niveaux faite grâce à une matrice et une collection de plateformes a afficher donc personnalisable 
* Plusieurs types de plateformes sont ajoutables à chaque niveau les rendant plus ou moins complexes et uniques
* Durée des niveaux variable et théoriquement aussi longs que les machines le permettent 

