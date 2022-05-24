import { LightningElement,track } from 'lwc';
export default class ComboboxBasic extends LightningElement {

    todoTasks = [];
    newTask ='';
    value = '';

    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }

    comboBoxOnChange = (event) => {
        this.value = event.detail.value;
    }
    updateNewTask(event) {
        this.newTask = event.target.value;
    }
    addTaskToList(event){
        console.log("Button Clicked");
        this.todoTasks.push({
            id: this.todoTasks.length + 1,
            name: this.newTask,
            priority: this.value
        });
        this.newTask = '';
        this.value = '';
        console.log(this.todoTasks);
    }
}
