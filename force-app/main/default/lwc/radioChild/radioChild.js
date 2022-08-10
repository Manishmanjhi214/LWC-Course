import { LightningElement,api } from 'lwc';

export default class RadioChild extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
    @api
    selectradio(radioValue){
        const selectedradio = this.options.find( radio =>{
            return radioValue === radio.value;
        })

        if(selectedradio){
            this.value = selectedradio.value;
            return "Successfully selected";
        } 
        return "No radio found";
        
    }
}