const input = document.querySelector('input');
const list_tasks = document.querySelector('.list-tasks');
const add_task = document.querySelector('.btn_add');

let arr = [];

// list_tasks.addEventListener("onchange", addTask);

function addTask() {

list_tasks.innerHTML = "";
    // const newtask = document.createElement('li');
    // newtask.innerHTML = '';



    // const span = document.createElement('span');
    // span.innerHTML = '';

    // const btn_delete = document.createElement('button');

    // btn_delete.innerHTML = "Delete";

    if (input.value !== '') {

        

        arr.push({ info: input.value , finished : "no"});
        input.value = '';
    }

        for (let i = 0; i < arr.length; i++) {

            const newtask = document.createElement('li');
            newtask.innerHTML = '';
    
            const span = document.createElement('span');
            span.innerHTML = '';

            newtask.innerHTML = arr[i].info;

            const btn_delete = document.createElement('button');
            btn_delete.innerHTML = "Delete";

            const btn_finished = document.createElement ('button');
            btn_finished.innerHTML = "Finished";

            newtask.appendChild(span);

            newtask.appendChild(btn_finished);

            newtask.appendChild(btn_delete);
            
            list_tasks.appendChild(newtask);

            btn_finished.addEventListener ("click", () => {
                arr[i].finished = "yes";
            })

            btn_delete.addEventListener("click", () => {

                if (arr[i].finished === "yes"){
                    arr.splice(i, 1);
               console.log (arr);
            
                addTask();
                }
                


            });
        }
    // }



    // arr.push({ info: input.value });
    // input.value = '';

    // arr.forEach ( (element,indexx) => {
    //     // newtask.innerHTML = `
    //     // <span> ${element.info} </span>
    //     // <button class = "btn_delete"> Delete </button>
    //     // `;

    //     span.innerHTML = element.info;

    //     btn_delete.innerHTML = "Delete";

    //    btn_delete.addEventListener("click", removeTask);

    //    newtask.appendChild(span);
    //    newtask.appendChild(btn_delete);

    // })
    // for (let i = 0; i < arr.length; i++) {


    //     newtask.innerHTML = arr[i].info;

    //     const btn_delete = document.createElement('button');
    //     btn_delete.innerHTML = "Delete";

    //     btn_delete.addEventListener("click", () => {
    //         arr.splice (i,1)
    //         console.log(arr)

    //     });  

    //     newtask.appendChild(span);
    //     newtask.appendChild(btn_delete);
    //     list_tasks.appendChild(newtask);
    // }




}

// function removeTask () {

//     let arrfilter = arr.filter (function(element,index) {
//           if (index !== i){
//             return index;
//           }    })
//     console.log(arrfilter);


// }

add_task.addEventListener("click", addTask)

console.log(arr);