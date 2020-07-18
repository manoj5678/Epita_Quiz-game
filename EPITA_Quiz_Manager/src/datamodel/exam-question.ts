import { Exam } from './exam'

export class Question {
 
    q_id : number
    q_title : string
    exam : Exam
 
    constructor(q_id : number = null, q_title : string = null, exam : Exam = null){
        this.q_id  = q_id
        this.q_title = q_title
        this.exam = exam
    }
}