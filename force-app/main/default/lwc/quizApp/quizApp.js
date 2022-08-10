import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected =[];
    correctAnswers=0;
    isSubmitted=false; 
    myQuestions = [
        {id : "Question1",
        question : "What is the capital of India?",
        answers : {
            a:"New Delhi",
            b:"Mumbai",
            c:"Chennai",
            d:"Kolkata"},
            correctAnswer : "a"
        },
        {id : "Question2",
        question : "What is the capital of USA?",
        answers : {
            a:"Texas",
            b:"Florida",
            c:"Washington",
            d:"New York"},
            correctAnswer : "c"
        },
        {id : "Question3",
        question : "What is the capital of Australia?",
        answers : {
            a:"Sydney",
            b:"Canberra",
            c:"Melbourne",
            d:"New South Wales"}
            ,
            correctAnswer : "b"
        },
        {id : "Question4",
        question : "What is the capital of UK?",
        answers : {
            a:"London",
            b:"Stockholm",
            c:"Amsterdam",
            d:"Netherlands"}
            ,
            correctAnswer : "a"
        }];

    // used for disabling the submit button when the quiz is submitted
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    // used for dynamic styling of showing the result
    get isAllCorrect(){
        return `slds-text-heading_large ${this.correctAnswers === this.myQuestions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    // changeHandler gets called for every click in option
    changeHandler(event){
        const{name,value} = event.target;
        this.selected={...this.selected,[name]:value};
    }

    // used for submitting the quiz
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers= correct.length;
        this.isSubmitted=true;
        console.log(this.correctAnswers);
    }

    // used for resetting the quiz
    resetHandler(){
        this.selected={};
        this.correctAnswers=0;
        this.isSubmitted=false;
    }
}