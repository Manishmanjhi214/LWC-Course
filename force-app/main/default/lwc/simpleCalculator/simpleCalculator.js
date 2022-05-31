import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track checkResults;
    firstNumber;
    secondNumber;
    @track results=[];
    @track previuosResults= false;

 numberChangeHandler(event) {
    const inputBoxName = event.target.name;
    if(inputBoxName == "firstNumber"){
        this.firstNumber = event.target.value;
    }
    else if(inputBoxName == "secondNumber"){
        this.secondNumber = event.target.value;
    } 
}

addHandler(){
    const Fnum = parseInt(this.firstNumber);
    const Snum = parseInt(this.secondNumber);
    this.checkResults = `the result of ${Fnum} + ${Snum} is ${Fnum+Snum}`;
    this.results.push(this.checkResults);
    }

substractHandler(){
        const Fnum = parseInt(this.firstNumber);
        const Snum = parseInt(this.secondNumber);
        this.checkResults = `the result of ${Fnum} - ${Snum} is ${Fnum-Snum}`;
        this.results.push(this.checkResults);
    }
multiplyHandler(){
        const Fnum = parseInt(this.firstNumber);
        const Snum = parseInt(this.secondNumber);
        this.checkResults = `the result of ${Fnum} * ${Snum} is ${Fnum * Snum}`;
        this.results.push(this.checkResults);
    }
divisionHandler(){
        const Fnum = parseInt(this.firstNumber);
        const Snum = parseInt(this.secondNumber);
        this.checkResults = `the result of ${Fnum} / ${Snum} is ${Fnum/Snum}`;
        this.results.push(this.checkResults);
    }
previousResultsHandler(event){
    this.previuosResults = event.target.checked;
}
}