import { api, LightningElement } from 'lwc';

export default class classroom extends LightningElement {
    @api classInfo ={ classNo:'##', buildingNo:'Defaut'};
    @api showClassInfo=false;
}