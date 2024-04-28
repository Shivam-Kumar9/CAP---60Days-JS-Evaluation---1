       // catching all html select tag elements
let filDep = document.querySelector("#fil-depart")
let filGen = document.querySelector("#fil-gender")
let filSal = document.querySelector("#fil-salary")

let tbody = document.querySelector("tbody")


   // filter Department function
let handleDepartment = ()=>{
    let dep = filDep.value;
    console.log(dep);
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${dep}`)
}

filDep.addEventListener("change",()=>{
    handleDepartment()
}) 



      // filter gender function   
let handleGender = ()=>{
    let gen = filGen.value;
    console.log(gen);
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${gen}`)
}

filGen.addEventListener("change",()=>{
    handleGender()
}) 


       // filter salary function
let handleSalary = ()=>{
    let sal = filSal.value;
    console.log(sal);
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=${sal}`)
}

filSal.addEventListener("change",()=>{
    handleSalary()
}) 
 

     // async fetching function
let getData = async (url)=>{

    let res = await fetch(url) 
    let data = await res.json()
    //console.log(data)
    showData(data)
}
     //function for display data on dom
let showData = (arr)=>{
      tbody.innerHTML=null;
    let orignaldata = arr.data;
    //console.log(orignaldata)

    orignaldata.forEach((ele,i)=>{

        let row =document.createElement("tr")
        row.innerHTML=`<td>${ele.id}</td>
                       <td>${ele.name}</td>
                       <td>${ele.gender}</td>
                       <td>${ele.department}</td>
                       <td>${ele.salary}</td>
                      ` 
        tbody.append(row)              
    })

}

//  function for page next 
var count=1;
function next(){
  
count++;
if(count==11){
   count=1;
}

getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${count}&limit=10`)


}

//  function for previous page
function prev(){
   count--;
   if(count==0){
        count=10;
   }
 
   
   getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${count}&limit=10`)
}

getData(` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${1}&limit=10`)