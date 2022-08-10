import { LightningElement } from 'lwc';

export default class RadioParent extends LightningElement {
    value;
    checkboxSelectHandler(){
        const childComponent = this.template.querySelector('c-radio-child');
        const returnedMessage = childComponent.selectradio(this.value);
        console.log('Returned Message: ', returnedMessage);
    }

    onInputChangeHandler(event){
        this.value = event.target.value;
    }
}