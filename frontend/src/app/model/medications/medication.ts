import { DrugForm } from "./drugForm";
import { DrugKind } from "./drugKind";
import { DrugType } from "./drugType";
import { TypeOfPrescribing } from "./typeOfPrescribing";

export class Medication {

    public name : string;
    public drugForm : DrugForm;
    public drugType : DrugType;
    public producer : string;
    public typeOfPrescribing : TypeOfPrescribing;
    public contraindications : string;
    public additionalNotes : string;
    public dailyDose : number;
    public drugKind : DrugKind;

    constructor(name : string,  drugForm : DrugForm, drugType : DrugType, 
        producer:string, typeOfPrescribing : TypeOfPrescribing, contraindications: string,
        additionalNotes: string, dailyDose: number, drugKind:DrugKind) {
        this.name = name;
        this.drugForm = drugForm;
        this.drugKind = drugKind;
        this.drugType = drugType;
        this.producer = producer;
        this.typeOfPrescribing = typeOfPrescribing;
        this.contraindications = contraindications;
        this.additionalNotes = additionalNotes;
        this.dailyDose = dailyDose;
    }
    
}