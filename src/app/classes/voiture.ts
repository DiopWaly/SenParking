export class Voiture {
    private matricule: string;
    private description: string;
    private tarifjrne: number;
    private modele: any;
    private capacite: string;
    private air: string;
    private options: string;
    private conditions: string;
    private image: string;
    constructor(voiture: any){
        this.matricule = voiture.matricule;
        this.description = voiture.libelle;
        this.tarifjrne = voiture.price;
        this.modele = voiture.modele;
        this.capacite = voiture.capacite;
        this.air = voiture.air;
        this.options = voiture.option;
        this.conditions = voiture.condition;
        this.image = voiture.image;
    }
}
