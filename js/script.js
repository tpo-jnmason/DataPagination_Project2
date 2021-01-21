/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*function createElement(elementName, property, value) {
   const element = document.createElement(elementName)
   element[property] = value;
   return element
}

const studentName = createElement('h3', data[1].name, `${data[1].name.first}`, `${data[1].name.last}`); 
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
           let li = document.createElement('li');
           const studentDiv = document.createElement('div');
           li.appendChild(studentDiv);
           const img = document.createElement('img');
           img.src = list[i].picture.medium;
           studentDiv.appendChild(img);
           const h3 = document.createElement('h3');
           h3.textContent = `${list[i].name.first} ${list[i].name.last}`
           studentDiv.appendChild(h3);
           const emailSpan = document.createElement('span')
           emailSpan.textContent = list[i].email;
           studentDiv.appendChild(emailSpan);
   //add this to the student list children
           studentList.appendChild(li);       
         
      }
   }
}

showPage(data,1);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
