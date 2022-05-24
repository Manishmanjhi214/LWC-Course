import { api, LightningElement } from 'lwc';

export default class AccountRelatedAssignmennt2 extends LightningElement {
    @api recordId;
    @api date;
    @api type;
    @api color;
    @api recordName;
}