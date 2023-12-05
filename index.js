

// this is one class to structure the employees
class Employee {
    constructor(name, type) {
    this.name=name;
    this.type = type;
        }
    
    // this is a describe method- to provide more info about employee
        describe () {
        return `${this.name} is a ${this.type} employee`;
    }
    }
    // the class employee ends here
    
    // this is another class to structure the department
    class Department {
    constructor (name) {
    this.name = name;
    this.employee = [];
    }
    
    // this is a method to check if the employee is an instance of the Employee class. If it is not, user will get the custom error message listed below
    addEmployee (employee) {
       if (employee instanceof employee) {
        this.employees.push (employee);
       } else {
        throw new Error ('You can only an an instance of Employee. Argument is not an Employee: ${employee}');
       }
     }
    
    // this is a describe method- to provide more info about department: the department name & amoutn of the dept employees 
    describe () {
    return `${this.name} has $ {this.employees.length} employees.`;
      } 
    }
    
    
    // this is another class -which is the menu which drives the application and its choices. There is also an array of teams here
    class Menu {
    constructor () {
    this.department = [];
    this.selectedDepartment = null;
    }
    
    // this is a method to start-present the menu application options to the user. The code below includes a 'loop' and 'switch' that will allow user to 
    // make a selection then a specific action will be returned

    start () {
    let selection = this.showMainMenuOptions();
    while (selection !=0) {
        switch (selection) {
            case '1':
                this.createDepartment();
                break;
            case '2':
                this.viewDepartment();
                break;
            case '3':
                this.deleteDepartment();
                break;
            case '4':
                this.displayDepartment();
                break;
            default:
                selection= 0;
        }

    // having the showmainmenuoptions listed at the beginning & end of loop allows use to continue making selection from the options listed.
   showMainMenuOptions ();
    }
    // this alert section is the action that will occur when user selects default "0"- this is an action outside of the loop above
    alert ('Good Bye!')
    }
    
    // this is the code that initiates the actions that will occur based on the selections made by the user (after user makes selection)
    showMainMenuOptions (departmentinfo) {
        return prompt(`
        0) exit 
        1) create new department
        2) view department
        3) delete department
        4) display all departments
        `);
    }

    showDepartmentMenuOptions (departmentinfo) {
        return prompt(`
            0) back 
            1) create an employee
            2) delete an employee
                
            ${departmentinfo}
            `);
    }
            
    // this is a for loop that is building a blank string that will iterate through all departments to display all departments & obtain a dept name, add a number to it, list  
    // each dept on a new line
    displayDepartment() {
        let departmentString = '';
        for (let i=0; i < this.department.length;i++) {
        departmentString +=i +')' + this.departments[i].name + '\n';
        }  alert (departmentString); 
        }
    
     // This is method to create a new dept- the new dept names being pushed into the teams array
        createDepartment() {
        let name=prompt ('Enter name for new department:');
        this.departments.push (new department (name));

// This is method to see specific department that user selected & we are validating that it is a valid response for the depts we have        
        viewDepartment() 
        let index = prompt ('Enter the index of the department you would like to view:');
        if (index > -1 && index < this.department.length) {
        this.selectedDepartment= this.departments[index];
        let description= 'Department Name: ' + this.selectedDepartment.name + '\n';
    
        // This for loop will display the employees for the dept  selected
        for (let i=0; i <this.selectedDepartmentt.employee.length; i ++ ) {
        description += i + ')' + this.selectedDepartment. employee [i].name + '-' + this.selectedDepartment.employee[i].type + '\n'; 
           }
        // This "sub-menu" has a new for loop & new switch that will show the dept AND the menu options for the dept
        let selection= this.showDepartmentMenuOptions (description);
        switch (selection) {
        case 'l':
        this.createemployee ();
        break;
        case '2':
        this.deleteemployee ();
            }
        }    
    }

    deleteemployee () {
        let index = prompt ('Enter the index of the employee you want to delete:');
        if (index > -1  && index < this.selectedDepartment.employee.length) {
        this.selectedDepartment.employee.splice (index, 1);
        }
    }
    
        deleteDepartment() {
        let index =prompt ('Enter the index of the department you want to delete:');
        if (index > -1  && index < this.employee.length) {
        this. department.splice (index, 1);
            }
        }
}
    // This is an instance of the menu
    let menu = new Menu ();
     menu.start ();



