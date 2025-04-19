let start_btn = document.getElementById('start_btn');
let stop_btn = document.getElementById('stop_btn');
let reset_btn = document.getElementById('reset_btn');
let save_btn = document.getElementById('save_btn');
let watch_display = document.getElementById('watch_display')
let triger  = 0;
let mls = 0;
let sec = 0;
let min = 0;
let returnTimer = null;
let num_recorder_right = 0; 
let arr = [];
let counter_n = 0;
//for start btn  ================
start_btn.addEventListener('mousedown' , ()=> {
    start_btn.style.width = '190px';
    start_btn.style.height = '76px';
    start_btn.style.fontSize = '25px';
    start_btn.style.backgroundColor  = 'lightgreen';
})
start_btn.addEventListener('mouseup' , ()=> {
    start_btn.style.width = '200px';
    start_btn.style.height = '80px'
    start_btn.style.fontSize = '29px'
    start_btn.style.backgroundColor = '';
})

//time setup

start_btn.addEventListener('click' , ()=> {
    if(timer != null) {
        clearInterval(returnTimer);
    }
    
    returnTimer = setInterval(timer, 10)
} )

stop_btn.addEventListener('click' , ()=> {
    clearInterval(returnTimer);
} )


reset_btn.addEventListener('click' , ()=> {
   
    clearInterval(returnTimer);
    mls = 0;
    sec = 0;
    min = 0;
    watch_display.innerHTML = `00:00:00`;

        
    
    
} )













//for stop btn ============
stop_btn.addEventListener('mousedown' , ()=> {
    stop_btn.style.width = '190px';
    stop_btn.style.height = '76px';
    stop_btn.style.fontSize = '25px';
})
stop_btn.addEventListener('mouseup' , ()=> {
    stop_btn.style.width = '200px';
    stop_btn.style.height = '80px'
    stop_btn.style.fontSize = '29px'
})

//for reset btn  ================

reset_btn.addEventListener('mousedown' , ()=> {
    reset_btn.style.width = '190px';
    reset_btn.style.height = '76px';
    reset_btn.style.fontSize = '25px';
})
reset_btn.addEventListener('mouseup' , ()=> {
    reset_btn.style.width = '200px';
    reset_btn.style.height = '80px'
    reset_btn.style.fontSize = '29px'
})


// for save btn ================   

save_btn.addEventListener('click' , ()=> {


    if(num_recorder_right < 11 ) {
        num_recorder_right++;
        display();
        
    }else {
        alert(' saved bucket is full 🙇,please delete item from save bucket ');
    }
  
    
})

save_btn.addEventListener('mousedown' , ()=> {
    save_btn.style.width = '190px';
    save_btn.style.height = '76px';
    save_btn.style.fontSize = '25px';
})
save_btn.addEventListener('mouseup' , ()=> {
    save_btn.style.width = '200px';
    save_btn.style.height = '80px'
    save_btn.style.fontSize = '29px'
})







// for delete ===== 

document.getElementById('clear_record_btn').addEventListener('click' , ()=> {
   
    let reco =  document.querySelectorAll('.rec')
  

        let ask = confirm('Are you sure ❓, you want to delete all the records 🤷‍♂️  \n   if you want to delete, do `ok`, otherwise do `cancel`   ');
      

        if(ask) {
            delete_rec();
        }

    
   
//    delete_rec();  
    // let ask = confirm('Are you sure ❓, you want to delete all the records 🤷‍♂️  \n   if you want to delete, do `ok`, otherwise do `cancel`   ');
   

  
})




function delete_rec(){
    let reco =  document.querySelectorAll('.rec')
    console.log(reco.length);
    


    for(let i = 0 ; i < reco.length ; i++) {
        reco[i].remove();
      
    }

    num_recorder_right = 0;

    





    
    

}





//for watch display ================



function timer() {
    mls++;
    if( mls > 99) {
        sec++;
        mls = 0;
       
    }
   
    if(sec > 59) {
        min++;
        sec = 0;
        
    }

    let mls_string;
    let sec_string;
    let min_string;

    if( mls > 9) {
        mls_string = mls;
    }else {
        mls_string = `0${mls}`;
        
    }

    
    if( sec > 9) {
        sec_string = sec;
    }else {
        sec_string = `0${sec}`;
       
    }


    
    if( min > 9) {
        min_string = min;
    }else {
        min_string = `0${min}`;
      
    }
      
    watch_display.innerHTML = `${min_string}:${sec_string}:${mls_string}`;
  
}





function display() {
    let empty = '';
    let mls_str = '';
    let sce_str = '';
    let min_str = '';
    let text = 'X';
    let t_Records = document.getElementById('t-records');


    
    let show_r = document.createElement('div');

    show_r.id = 'records';
    show_r.className = 'rec';
    show_r.style.display = 'flex';
    

    let show_number = document.createElement('div');
    let show_time = document.createElement('div');
    let show_delete = document.createElement('div');

    show_number.id = 'number';
    show_time.id = 'show_time';
    show_delete.id = 'delete';
    
    

    show_r.appendChild(show_number);
    show_r.appendChild(show_time);
    show_r.appendChild(show_delete);
    show_delete.innerHTML  = text;

    if(mls > 9) {
         mls_str = `${mls}`;
    }else {
        mls_str = `0${mls}`;
    }

    if(sec > 9) {
        sce_str = `${sec}`;
    }else {
        sce_str = `0${sec}`;
    }


    if(min > 9) {
        min_str = `${min}`;
    }else {
        min_str = `0${min}`;
    }

     counter_n++;

    // arr.push = counter_n ;
    
    //  arr.push(show_r);
    // updateRecordNumbers();
    // console.log(arr);


    
     

    show_number.innerHTML = num_recorder_right;
    show_time.innerHTML = `${min_str}:${sce_str}:${mls_str}`;


     


        t_Records.appendChild(show_r);
    

    


   
   
    // let text_num;
    // let text_time;
    // let t


}











document.addEventListener('click', function (event) {
    if (event.target.id === 'delete') {
    let recordToDelete = event.target.parentElement;
    recordToDelete.remove();
    
     updateRecordNumbers();
     
    }

});
function updateRecordNumbers() {
    let records = document.querySelectorAll('#t-records .records');
    records.forEach((record, index) => {
        let numberElement = record.querySelector('#number');
        // console.log(numberElement);
        if (numberElement) {
            numberElement.innerHTML = index + 1;
        }
    });
    num_recorder_right--;
    // arr.shift();    
}