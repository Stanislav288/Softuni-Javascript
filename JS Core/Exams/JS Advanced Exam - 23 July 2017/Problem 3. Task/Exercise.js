class Task{
    constructor(title,deadline){
        this.title=title;
        this.status='Open';
        this.deadline=deadline;
        this.statusIcons={'Open':'\u2731',"In Progress":'\u219D','Complete':'\u2714','Overdue task':'\u26A0'};
    }

    get deadline(){
      return this._deadline;
    }

    set deadline(deadline){
        this._deadline=deadline;
        if(this.isOverdue){
         //   throw new Error();
        }
    }

    get isOverdue(){
        return this.status!=='Complete' && Date.now()>this.deadline;
    }

    toString(){
        console.log('stanislav    '+this.title+'   '+this.isOverdue+'  '+this.deadline);
        let statusIcon=this.isOverdue==true?this.statusIcons['Overdue task']:this.statusIcons[this.status];
        let deadlineValue=this.isOverdue===true?'(overdue)':this.deadline;

        if(this.status==='Complete'){
            return `[${statusIcon}] ${this.title}`;
        }else if(this.isOverdue){
            return `[${statusIcon}] ${this.title} ${deadlineValue}`;
        }else{
            return `[${statusIcon}] ${this.title} (deadline: ${deadlineValue})`;
        }
    }

    static getStatusOrder(){
        return ['In Progress','Open','Complete'];
    }

    static comparator(a,b){
        if((a.isOverdue && b.isOverdue) || (a.status===b.status)){
            if(a.deadline<b.deadline){
                return -1;
            }else if(a.deadline>b.deadline){
                return 1;
            }else{
                return 0;
            }
        }

        let statusOrder=Task.getStatusOrder();
        if(a.isOverdue || statusOrder.indexOf(a)<statusOrder.indexOf(b)){
            return -1;
        }else if(b.isOverdue || statusOrder.indexOf(a)>statusOrder.indexOf(b)){
            return 1;
        }else{
            return 0;
        }
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//task1.deadline = new Date(2005, '4', '20');
