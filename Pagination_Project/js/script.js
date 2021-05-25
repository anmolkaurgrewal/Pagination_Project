
let studentList = document.querySelectorAll('.student-item');
let contactsPerPage = 11;

function showPage(list, page) {

    const startIndex = (page * contactsPerPage) - contactsPerPage;
    const endIndex = (page * contactsPerPage);
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
           studentList[i].style.display = 'block';
        } else {
           studentList[i].style.display = 'none';
        }
     }
  
     return false;
  }
  
  function appendPageLinks(list) {
   
    const listLength = list.length;
 
    const numOfPages = Math.ceil(listLength / contactsPerPage);
 
    const divPagination = document.createElement('div');
    divPagination.className = "pagination";
 
    const ulPagination = document.createElement('ul');
 
    divPagination.appendChild(ulPagination);
    const mainpageDiv = document.querySelector('.page');
    mainpageDiv.appendChild(divPagination);   
 
    for (let i = 0; i < numOfPages; i++) {
       if (i < numOfPages) {
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.href = "#";
          a.textContent = i + 1;
 
          a.addEventListener('click', function(){
             showPage(list, i+1);
          });         
 
          li.appendChild(a);
          ulPagination.appendChild(li);
       } 
    }
 }
 
  showPage(studentList, 1);
  appendPageLinks(studentList);
  
