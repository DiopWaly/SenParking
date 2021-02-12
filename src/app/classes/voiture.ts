export class Voiture {
    public id: number;
    public matricule: string;
    public description: string;
    public tarifjrne: number;
    public modele: any;
    public capacite: string;
    public air: string;
    public options: string;
    public conditions: string;
    public image: string;
    constructor(voiture: any){
        
        this.id = voiture.id;
        this.matricule = voiture.matricule;
        this.description = voiture.libelle;
        this.tarifjrne = voiture.tarifjrne;
        this.modele = voiture.modele;
        this.capacite = voiture.capacite;
        this.air = voiture.air;
        this.options = voiture.option;
        this.conditions = voiture.condition;
        this.image = voiture.image;
    }
}
