let array=[];
let appendTask = function(task){
    let Ulist=document.querySelector('ul');
    let list=document.createElement('li');
    list.className='collection-item';
    list.innerText=task;
    Ulist.appendChild(list);
    
     
    let link= document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML="<i class=\"fa fa-remove\"></i>";
    link.style.cursor='pointer';
    list.appendChild(link);
  }
      if(localStorage.getItem("task")=== null){
      array=[]; 
    }else{
     
      array =  JSON.parse(localStorage.getItem("task"));
      console.log('array : '+array)
      array.forEach((task) => appendTask(task))
      
    }
let addTask=function(taskName){
    let Ulist=document.querySelector('ul');
    //Creating a new li element
    let list=document.createElement('li');
    list.className='collection-item';
    list.innerText=taskName;
    Ulist.appendChild(list);
    save();

    document.getElementById('task').value;
    document.getElementById('task').value=null;

   
    //creating a link tag

    let newLink=document.createElement('a');
    newLink.className='delete-item secondary-content';
    newLink.innerHTML="<i class=\"fa fa-remove\"></i>"
    list.appendChild(newLink);
  }
  //addTask('Walk');


    //adding input value to the Task
    document.querySelector('.btn').addEventListener('click',addTaskListener)
    function addTaskListener(e){
        addTask(document.getElementById('task').value);
    }

    //to remove tasks when clicked on cross icon
    document.querySelectorAll('.delete-item').forEach(a=>addEventListener('click',removeTask))
    function removeTask(e){
    if(e.target.className ==='fa fa-remove'){
        e.target.parentElement.parentElement.remove();
        deleteTask(e.target.parentElement.parentElement);
    }
}

    //remove all task when clear task hits
    document.querySelector('.clear-tasks').addEventListener('click',removeAll);
    function removeAll(e){
        document.querySelectorAll('.collection-item').forEach(li=>li.remove());
    }

    
  // To save the added Tasks to the local storage

  let save=function(){
     let taskValue= document.getElementById('task').value;
     if(taskValue!=null){
         array.push(taskValue);
        // console.log(array);
         localStorage.setItem('task',JSON.stringify(array))
     }
  }
  //remove deleted task from local storage
  function deleteTask(taskClicked){
    if (localStorage.getItem('task') === null) {

        array = [];
        } else {
        array = JSON.parse(localStorage.getItem('task'))

        }

   array.forEach(function(task,index){

    if(taskClicked.textContent === task){
      array.splice(index,1)

    }

   })

   localStorage.setItem('task',JSON.stringify(array))
}




   


   
   
