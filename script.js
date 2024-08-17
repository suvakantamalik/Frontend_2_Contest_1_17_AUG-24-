/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  let arr2 = [
    { id: 11, name: "Kiran", age: "18", profession: "developer" },
    { id: 12, name: "Salman", age: "20", profession: "developer" },
    { id: 13, name: "Sk", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    const developers = arr.map(person =>{
        if(person.profession === "developer"){
            console.log(`${person.id} - ${person.age} - ${person.name} - ${person.profession}`);
            return `${person.id} - ${person.age} - ${person.name} - ${person.profession}`;
        }
    }).filter(Boolean);
    console.log(developers);

     const developerListDiv = document.getElementById("developer-list");

     developerListDiv.innerHTML = "";
     developerListDiv.innerHTML += `Developer List by Map <br>`;

     developerListDiv.innerHTML += developers.join("<br>");
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developerListDiv = document.getElementById("developer-list");
    
    developerListDiv.innerHTML = "";
    developerListDiv.innerHTML += `Developer List by For Each <br>`;

    const developers = arr.forEach(developer => {
        if (developer.profession === "developer") {
            console.log(`${developer.id} - ${developer.age}  - ${developer.name} - ${developer.profession}`);
            developerListDiv.innerHTML += `${developer.id} - ${developer.age}  - ${developer.name} - ${developer.profession}<br>`;
        }
    });
    console.log(developers);
  }
  
  
  function addData() {
    //Write your code here, just console.log
    /*
    const newDeveloper = { id: 3, name: "Suvakanta", age: "27", profession: "developer" };
    arr.push(newDeveloper);
    console.log(arr);
    */

    document.getElementById("addData-modal").style.display = "block";
    const form = document.getElementById("addData-form");
    form.addEventListener("submit", handleSubmit);
  }
  function handleSubmit(event) {
    
        event.preventDefault();

        // const id = document.getElementById("addData-id").value;
        const maxId = arr.reduce((max, item) => item.id > max ? item.id : max, 0);
        const id = maxId + 1;

        const name = document.getElementById("addData-name").value;
        const age = document.getElementById("addData-age").value;
        const profession = document.getElementById("addData-profession").value;
        
        const newData = {id:parseInt(id), name, age:parseInt(age), profession};
        arr.push(newData);
        console.log(arr);
  } 
  document.addEventListener("DOMContentLoaded", function() {
    addData();
});


function closeAddDataForm() {
    document.getElementById("addData-modal").style.display = "none";
}
  
  function removeAdmin() {
    //Write your code here, just console.log
    const newArr = arr.filter(data => data.profession === "admin").map(person => `Developer List of Removed Admin <br> ${person.id} - ${person.age} - ${person.name} - ${person.profession}`);
    console.log(newArr);
    console.log(newArr);

    const developers = arr.map(person =>{
        if(person.profession === "admin"){
            return `${person.id} - ${person.age} - ${person.name} - ${person.profession}`;
        }
    }).filter(Boolean);
    const developerListDiv = document.getElementById("admin-list");
    developerListDiv.innerHTML = "";
    developerListDiv.innerHTML += `Developer List of Removed Admin <br>`;
    developerListDiv.innerHTML += developers.join("<br>");

    arr = arr.filter(data => data.profession !== "admin");    
    console.log(arr);
    PrintDeveloperbyMap();
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArr = arr.concat(arr2);
    const developers = newArr.map(ele =>{
        return `${ele.id} - ${ele.age} - ${ele.name} - ${ele.profession}`;
    }).filter(Boolean);
    const developerListDiv = document.getElementById("concat-list");
    developerListDiv.innerHTML = "";
    // developerListDiv.innerHTML += `Concatenated List of all Developer <br>`;
    developerListDiv.innerHTML += developers.join("<br>");

    console.log(newArr);
  }