
const inputOne = document.querySelector(".input-one");
const inputTwo = document.querySelector(".input-two");
const btnOne= document.querySelector(".btn-one");
const btnTwo= document.querySelector(".btn-two");
const textOne= document.querySelector(".text-one");
const textTwo= document.querySelector(".text-two");


btnOne.addEventListener("click", () => {
    textOne.innerHTML = "";
    let a = +inputOne.value;
    let b = +inputTwo.value;
    for (let i =a; i <= b; i++) {
     
        let x = i.toString().split("").reverse().join("");
        if (x == i) {
            textOne.innerHTML += `${+x}                      `;
        }
      
    }
  });
  //? *******************
 

  btnTwo.addEventListener("click",()=>{
    textTwo.innerHTML ="" ;

  
    const perfectNumber =(num)=>{
        let count=0;
        
        
        for(let i=1 ;i<num ;i++){
            if(num%i==0){
                count += i
               }
        }
    
    
        return count == num
          }
          
//? =====================

let a = +inputOne.value;
let b = +inputTwo.value;

for(let i=a ; i<=b ;i++){
if(perfectNumber(i)){
textTwo.innerHTML +=`${+i},` 
}
        
    }

  })

