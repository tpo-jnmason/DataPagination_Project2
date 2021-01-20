/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
    const studentsPerPage = 9
    const startIndex = (page * studentsPerPage) - studentsPerPage;
    const endIndex = page * studentsPerPage;   
    const studentList = document.querySelector('.student-list');
    //set the innerHTML property of the variable you just created to an empty string
    studentList.innerHTML = '';
   // loop over the length of the `list` parameter
   // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
    for (let i = 0; i < list.length; i++) {
        if ( i >= startIndex && i < endIndex) {
           const li = document.createElement('li');
           const span = document.createElement('span')
           span.textContent = data.email;
           li.appendChild(span);
           const h3 = document.createElement('h3');
           h3.textContent = text;
           li.appendChild(h3);

           return li;
         
           
           console.log(studentList)
         
       }
   }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
