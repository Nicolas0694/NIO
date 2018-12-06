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
        this.nextMatriceSprite = -1;
        this.nextPlatform = -1;
    }

    /* Retourne la sprite suivante prédéfinie dans la matrice en fonction du contenant l'esemble des sprites */
    /* si il n'y a plus de sprites retourne 0 */
    /* ... pour faire while(getSpriteSuivante() != null) ... */
    getSpriteMatriceSuivante(){
        this.nextMatriceSprite += 1;
        if(this.nextMatriceSprite < this.matrice_sprites){return this.matrice_sprites[this.nextMatriceSprite];}
        else{return 0;} 
    }

    /* Retourne la sprite précedante, si on est hors index retourne 0 */
    getSpriteMatricePrecedante(){
        this.nextMatriceSprite -= 1;
        if((this.nextMatriceSprite < 0) || (this.nextMatriceSprite > this.matrice_sprites.length)){
            return this.matrice_sprites[this.nextMatriceSprite];
        }
    }

    /* retourne la sprite selon l'entier entré en parametre, si 2 parametres dont données retourne une liste contenant les 
    differentes valeurs de la matrice entre les 2 entiers données inclus */
    getIMatriceSprite(rechercheParam1,rechercheParam2 = null){
        if(rechercheParam2 != null){
            let zoneMatrice = Array(rechercheParam2-rechercheParam1);
            j = 0;
            for(i=rechercheParam1; i <= rechercheParam2; i++){
                zoneMatrice[j] = this.matrice_sprites[i];j++;
            }
            return zoneMatrice;
        }
        else{return this.matrice_sprites[rechercheParam1];}
    }

    /* Retourne la platforme suivante */
    /* si il n'y a plus de platformes retourne 0 */
    getPlatformeSuivante(){
        this.nextPlatform += 1;
        if(this.nextPlatform < this.list_Platformes){return this.list_Platformes[this.nextPlatform];}
        else{return 0;}
    }
    
}
