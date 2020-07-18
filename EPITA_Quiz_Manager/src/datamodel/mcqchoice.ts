import { Question } from './exam-question';
export class MCQChoice {

    mc_id : number
    mc_valid : number
    mc_choice : string
    question : Question
    
    constructor(mc_id : number = null, mc_valid : number = null, mc_choice : string = null, question : Question = null){
        this.mc_id  = mc_id
        this.mc_valid = mc_valid
        this.mc_choice = mc_choice
        this.question = question
    
}