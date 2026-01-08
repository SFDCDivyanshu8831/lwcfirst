import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {
    Taskname = "";
    Taskdate = null;
    incompletetask = [];
    completedtask = [];

    changeHandler(event) {
        let {name , value} = event.target;
            if (name ==="Taskname") {
                this.Taskname = value;
            }else if (name === "Taskdate") {
                this.Taskdate = value;
            }
    }

    resetHandler() {
        this.Taskname = "";
        this.Taskdate = null;
    }

    addTaskHandler() {

        //if task end date is missing then popoulate todays date
        if (!this.Taskdate) {
            this.Taskdate = new Date().toISOString().slice(0,10);
        }
        if(this.validateTask()){
            this.incompletetask = [...this.incompletetask,{
                Taskname : this.Taskname,
                Taskdate : this.Taskdate
            }];
            this.resetHandler();
            let sortedArray = this.sortTask(this.incompletetask);
            this.incompletetask = [...sortedArray];
            console.log("This.incompleteTask",this.incompletetask);
            
        }
    }

    validateTask() {
        let isValid = true;
        let element = this.template.querySelector(".Taskname")
        // condition 1- check is the task name is empty
        // condition 2- if the task name is not empty check for the duplicate task
        if(!this.Taskname) {
            isValid = false;
        }else{
            let Taskitem = this.incompletetask.find(
                (currItem) => 
                    currItem.Taskname === this.Taskname &&
                    currItem.Taskdate === this.Taskdate
                );

                if(Taskitem) {
                    isValid = false;
                    element.setCustomValidity("Task Already Exists")
                }

        } 
                if(isValid) {
                            element.setCustomValidity("")
                        }
                 element.reportValidity();
                 return isValid;       
    }  

    sortTask(inputArr) {
        let sortedArray = inputArr.sort((a,b) => {
            const DateA = new Date(a.Taskdate);
            const DateB = new Date(b.Taskdate);
            return DateA - DateB;
        });

        return sortedArray;
        
    }

    removalHandler(event){
        //FROM INCOMPLETE TASK ARRAY REMOVE THE ITEM
        let index = event.target.name;
        let removeItem = this.incompletetask.splice(index,1);
        let sortedArray = this.sortTask(this.incompletetask);
            this.incompletetask = [...sortedArray];
            console.log("This.incompleteTask",this.incompletetask);

    }

    completetaskHandler(event){
        let index = event.target.name;
        this.refreshData(index);
        
    }   

    dragStartHandler(event){
        event.dataTransfer.setData("index",event.target.dataset.item)
        
    }

    allowDrop(event) {
        event.preventDefault();
    }

    dropElementhandler(event){
        let index = event.dataTransfer.getData("index");
        this.refreshData(index);

    }

    refreshData(index){
        let removeItem = this.incompletetask.splice(index,1);
        let sortedArray = this.sortTask(this.incompletetask);
            this.incompletetask = [...sortedArray];
            console.log("This.incompleteTask",this.incompletetask);
            this.completedtask = [ ...this.completedtask, removeItem[0]]

    }
}