/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

 const studentsPerPage = 9
 const studentList = document.querySelector('.student-list');
 const header = document.querySelector('header');
 const linkList = document.querySelector('.link-list');

 // The createElement function allows an easy way to pull the student data from
 // data.js in order to display to the web page without duplicating code.

 function createElement(elementName, property, value) {
   const element = document.createElement(elementName)
   element[property] = value;
   return element
 }


// The showPage function creates the elements needed to display a "page" of nine students
// The loop is needed in order to create all student profiles.

 function showPage(list, page) {
     const startIndex = (page * studentsPerPage) - studentsPerPage;
     const endIndex = page * studentsPerPage;   
     studentList.innerHTML = '';

     for (let i = 0; i < list.length; i++) {
         if ( i >= startIndex && i < endIndex) {
            const li = createElement('li', 'className', 'student-item cf');
            studentList.appendChild(li);

            const studentDiv = createElement('div', 'className', 'student-details');
            li.appendChild(studentDiv);

            const avatar = createElement('img', 'className', `avatar`);
            avatar.src = list[i].picture.medium;
            studentDiv.appendChild(avatar);

            const h3 = createElement('h3', 'textContent', `${list[i].name.first} ${list[i].name.last}`);
            studentDiv.appendChild(h3);

            const emailSpan = createElement('span', 'className', 'email');
            emailSpan.textContent = list[i].email;
            studentDiv.appendChild(emailSpan);

            const joinedDiv = createElement('div', 'className', 'joined-details');
            li.appendChild(joinedDiv);

            const joinedSpan = createElement('span', 'className', 'date');
            joinedSpan.textContent = `joined ${list[i].registered.date}`;
            studentDiv.appendChild(joinedSpan);

            studentList.appendChild(li);       
         
         }
      }
 }

//The addPagination function creates the elements needed for the pagination buttons to 
//allow direct page navigation. The loop is necessary to create the appropriate number 
//of pages

function addPagination(list) {
    let numOfPages = Math.ceil(list.length/studentsPerPage);
    linkList.innerHTML = ''

    for (let i = 1; i <= numOfPages; i++ ){
        const buttonList= createElement('li', '', '');
        linkList.appendChild(buttonList);
        const button = createElement('button', 'textContent', `${i}`);
        button.type = 'button';
        buttonList.appendChild(button);
   } 
        let activeButton = linkList.firstElementChild.firstElementChild;
        activeButton.className = 'active';

    linkList.addEventListener('click', (e) => {

        if (e.target.type === 'button') {
            let page = e.target.textContent;
            linkList.querySelector('.active').className = '';
            e.target.className = 'active';
            showPage(list, page);
        }
    });
}

showPage(data,1);
addPagination(data);