/* Cette classe est l'ensemble des objets constituant la map */
class Map 
{
    /* png_sprites permet des sprites en fonction de la thematique de la map */
    constructor(startPJY,matrice_sprites,png_sprites,list_Platformes,list_PNGs,PJ){
        this.startPJ = startPJ;
        this.list_Platformes = list_Platformes;
        this.list_PNGs = list_PNGs;
        this.matrice_sprites = matrice_sprites;
        this.png_sprites = png_sprites;
        this.PJ = PJ;
    }

    /* Retourne la sprite suivante prédéfinie dans la matrice en fonction du contenant l'esemble des sprites */
    /* si il n'y a plus de sprites retourne 0 */
    /* ... pour faire while(getSpriteSuivante() != 0) ... */
    getSpriteSuivante(){
        
    }

    /* Retourne la platforme suivante */
    /* si il n'y a plus de platformes retourne 0 */
    getPlatformeSuivante(){

    }
}
