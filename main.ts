async function placedorder(order:()=>void) {
    await new Promise((resolve, reject) => {
        
        for (let i = 1 ; i <= 5 ; i++){
            setTimeout(() => {
                console.log(i);
                
            }, i * 1000);
        }
        resolve("Please placed your order")
    })
   
}
console.log(placedorder(()=>{
     new Promise((resolve, reject) => {
        for (let i = 0 ; i <= 5 ; i++){
            setTimeout(() => {
                console.log((i));
                resolve ("Please wait for your order")
            }, i * 1000);
        }
      
    }).then((res)=>{
        console.log("Please placed your order.");
        
    }).then((res)=>{
        console.log("Please wait for your order");
        
    })
    
}));
