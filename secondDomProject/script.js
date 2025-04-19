import { email } from "./email.js"
import service_items from "./items.js"

const service_details = document.querySelector('.service_details')

const show_error = document.createElement('p')
show_error.className = 'show_error'
const second_page_right_bottom = document.querySelector('.second_page_right_bottom')
show_error.innerText = '🔴 Add the items to cart to book'
second_page_right_bottom.append(show_error)

//green
const show_error_green = document.createElement('p')
show_error_green.className = 'show_error_green'
show_error_green.innerText = '🟢 Email has been sent successfully'
second_page_right_bottom.append(show_error_green)







let booked_item_array = [

]

const selectAllInput = document.querySelectorAll('.innp')





function isBokedService(booked_item_array) {
    const book_now_button = document.querySelector('.book_now_button')
    // no_service_img
    // no_service_heading
    // no_service_p
    const no_service_img = document.querySelector('#no_service_img')
    const no_service_heading =document.querySelector('#no_service_heading')
    const no_service_p =document.querySelector('#no_service_p')
    


    if(booked_item_array.length === 0) {
        book_now_button.classList.add("book_now_button_inactive")
        book_now_button.disabled = true;
      
        const booked_service = document.querySelector('.booked_service');
        booked_service.innerHTML = ""
        // Create no_service_img div
        const no_service_img = document.createElement('div');
        no_service_img.id = 'no_service_img';
        no_service_img.style.fontSize = '60px';
        no_service_img.style.marginTop = '10px';
        no_service_img.innerText = '🛈';


        // Create no_service_heading div
        const no_service_heading = document.createElement('div');
        no_service_heading.id = 'no_service_heading';
        no_service_heading.innerText = 'No item added';

        // Create no_service_p div
        const no_service_p = document.createElement('div');
        no_service_p.id = 'no_service_p';
        no_service_p.innerText = 'Add items to the cart from the services bar';

        // Append to booked_service container
        booked_service.append(no_service_img, no_service_heading, no_service_p);
        
        selectAllInput.forEach((ii)=> {
            ii.addEventListener('click'  , ()=> {
                  
                show_error.style.display = 'block'


                
                
        
            })
            
        })



        


        
        
     
       
       
    }else {

        book_now_button.disabled = false
        book_now_button.classList.remove('book_now_button_inactive');
        // const existingError = document.querySelector('.show_error');
        // if (existingError) {
        //     existingError.remove();
        // }
        show_error.style.display = 'none'

        
        selectAllInput.forEach((ii)=> {
            ii.addEventListener('click'  , ()=> {
                  
                show_error.style.display = 'none'
        
            })
            
        })

        book_now_button.addEventListener('click' , ()=> {

            show_error_green.style.display = 'block';

          
           
            booked_item_array.splice(0, booked_item_array.length)
           

            document.querySelectorAll('.left_add_service_btn_Remove').forEach(btn => {
                btn.className = 'left_add_service_btn';
                btn.innerText = 'Add item +';
            });
            
            
            
            showBooked_item_array(booked_item_array)




            
        })

        let greenMessageTimer ;

        clearTimeout(greenMessageTimer)



         
        greenMessageTimer =  setTimeout(()=>{

           show_error_green.style.display = 'none'

        },4000)






    }
    


}







const createBookeditem = (item,i)=> {
     
    // id...
    const booked_service_id = document.createElement('div')
    booked_service_id.id = 'booked_service_id'
    // service_ name
    const booked_service_name  = document.createElement('div')
    booked_service_name.id = 'booked_service_name'
    // service _ price
    const booked_service_price = document.createElement('div')
    booked_service_price.id = 'booked_service_price'
     
    //div
    const booked_service_details = document.createElement('div')
    booked_service_details.className = 'booked_service_details'
    
    booked_service_id.innerText = i+1
    booked_service_name.innerText = item.service_name
    booked_service_price.innerText = `₹ ${item.service_price} `
   

    //main_div..
    const booked_service = document.querySelector('.booked_service')

   // it is time to add

   booked_service_details.append(booked_service_id , booked_service_name , booked_service_price )
   booked_service.append(booked_service_details)


 
}

const showBooked_item_array = (booked_item_array)=> {

    const booked_service = document.querySelector('.booked_service')
    
    // Clear existing elements
    booked_service.innerHTML = ''

    booked_item_array.map((item,i)=>{

        createBookeditem(item,i)


    })

    // if(booked_item_array.length  == 0) {
    //     const left_add_service_btn = document.querySelectorAll('.left_add_service_btn')
    //     left_add_service_btn.forEach(btn => {
    //         btn.innerText = 'Add Items +';
    //       });

    // }



    isBokedService(booked_item_array)

}

const showTotal_Amount=(booked_item_array)=> {
    const totalAmount = document.querySelector('#TotalAmount')
    let num = 0
    booked_item_array.map((item)=> {
        
        num = num + Number(item.service_price)

    })

    totalAmount.innerText = `₹ ${num}`



}





const select_service_card = (item)=> {

      //service cart main div ...
      const service_choose = document.createElement('div')
      service_choose.className = 'service_choose'
      // service cart name main div ...
      const left_service_book = document.createElement('div')
      left_service_book.className = 'left_service_book'
      //service cart img div ...
      const left_service_book_img = document.createElement('div')
      left_service_book_img.className = 'left_service_book_img'
      //service cart name div ...
      const service_name = document.createElement('div')
      service_name.className = 'service_name'
      //service cart price div ...
      const service_price = document.createElement('div')
      service_price.className = 'service_price'
      // service add button ...
      const left_add_service_btn = document.createElement('button')
      left_add_service_btn.className = 'left_add_service_btn'
      
      
      left_add_service_btn.addEventListener('click' , ()=> {

        if(left_add_service_btn.className === 'left_add_service_btn') {
             
            left_add_service_btn.className = 'left_add_service_btn_Remove'
            left_add_service_btn.innerText = 'Remove Items -'
        }
        else  {





            left_add_service_btn.className = 'left_add_service_btn'
            left_add_service_btn.innerText = 'Add Items +'
        }

     

        if(booked_item_array.length > 0) {
             const book_now_btn = document.querySelector('.book_now_button');
                 
             book_now_btn.addEventListener('click' , ()=>{
                left_add_service_btn.className = 'left_add_service_btn'
             })

        }

      

        // if( left_add_service_btn.className === 'left_add_service_btn_Remove') {
             
        //   booked_item_array = booked_item_array.filter((book)=> book.id !== item.id)
        
        //     showTotal_Amount(booked_item_array)

        // }

        

        const filtered = booked_item_array.find(booked => booked.id === item.id)

        if(!filtered) {

            booked_item_array.push(item);
            showBooked_item_array(booked_item_array)

        }else{
           
             
            booked_item_array = booked_item_array.filter((book)=> book.id !== item.id)
              
            showBooked_item_array(booked_item_array)
      
            
        }

        showTotal_Amount(booked_item_array)
        


         
             
      })



      left_service_book_img.innerText = item.service_img
      service_name.innerText = item.service_name
      service_price.innerText = `₹ ${item.service_price}`
      left_add_service_btn.innerText = 'Add item +';
      //it's time to add ...
      left_service_book.append(left_service_book_img , service_name , service_price)
      service_choose.append(left_service_book, left_add_service_btn)
           
      service_details.append(service_choose)
      // console.log(service_choose);


}


const show_service_card = (service_items)=> {
   
 
    service_items[0].map((item)=> {
      select_service_card(item)
      isBokedService(booked_item_array)
     
    })

}

show_service_card(service_items)




isBokedService(booked_item_array)







