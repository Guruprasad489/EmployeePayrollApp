//Javascript to add set event listeners on document loading(UC10)
window.addEventListener('DOMContentLoaded', (event) => {
    //Setting the name to the employee object for validation
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    });
    //Setting the salary output by checking the salary value(UC10)
    const salary = document.querySelector('#salary');
    const outputSal = document.querySelector('.salary-output');
    outputSal.textContent = salary.value;
    salary.addEventListener('input', () => {
        outputSal.textContent = salary.value;
    });

    // const salary = document.querySelector('#salary');
    // const output = document.querySelector('.salary-output');
    // output.textContent = salary.value;
    // salary.addEventListener('input', function(){
    //     output.textContent = salary.value;
    // });

    //Setting the date to the employee object for validation(UC10)
    const date = document.querySelector('#date');
    // const errorDate = document.querySelector('#errorDate');
    date.addEventListener('input', function() {
        let startDate = getInputValueById('#day') +" "+ getInputValueById('#month') +" "+ getInputValueById('#year');
        try {
            //(new EmpPayrollData()).startDate = new Date(date.parse(startDate));
            checkkStartDate(new Date(Date.parse(startDate)));
            setTextValue('.errorDate', "");
            //errorDate.textContent = "";
        } catch (e) {
            setTextValue('.errorDate', e);
            //errorDate.textContent = e;
        }
    });
}); 