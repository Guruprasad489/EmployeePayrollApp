//UC9 - Employee Payroll Data
class EmployeePayrollData {

    //Getter and setter methods for property of id
    get empId() { return this._empId };
    set empId(id) {
        if (id != null)
            this._empId = id;
        else
            throw "The Id Is Null";
    };

    //Getter and setter methods for properties of name
    get name() { return this._name };
    set name(name) {
        let namePattern = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (namePattern.test(name))
            this._name = name
        else throw "Name Is Invalid";
    };

    //Getter and setter methods for properties of profilepic
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
            this._profilePic = profilePic;
    }

    //Getter and setter methods for property of gender
    get gender() { return this.gender };
    set gender(gender) {
            this.gender = gender;
    }

    //Getter and setter methods for property of department
    get dept() { return this.dept;}
    set dept(dept) {
            this.dept = dept;
    }

    //Getter and setter methods for property of salary
    get salary() { return this.salary };
    set salary(salary) {
            this.salary = salary;
    };

    //Getter and setter methods for property of startdate
    get startDate() { return this._startDate };
    set startDate(date) {
        //Givendate should not future date
        let todayDate = new Date().toLocaleDateString();
        if (date <= todayDate)
            this._startDate = date;
        else throw "The Given Date is future Date";
    }

    //Getter and setter methods for property of notes
    get empNotes() { return this._empNotes; }
    set empNotes(notes) {
            this._empNotes = notes;
    }

    //Method to return string of values
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this._startDate ? "undefined" : this._startDate.toLocaleDateString("en-US", options)
        return `Employee Name : ${this._empName} \nEmployee Gender : ${this._empGender} \nProfile Pic : ${this._empProfilePic} \nEmployee Department : ${this._empDept} \nEmployee Salary : ${this._empSalary} \nEmployee Start-Date : ${empDate} \nNotes = ${this._empNotes}`;
    }
}