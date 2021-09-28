
// name
// price
// year
//save product
//toast with product with delete option


class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        
        

    // SHOW ALERT "SUCCESS"
         document.getElementById("alert").innerHTML += `<div class="alert alert-success" role="alert" id="${this.name}-success">
        Product Added Successfully!
        </div>` 

    //    FADE SUCCESS ALERT
        setTimeout(()=>{
            document.getElementById("alert").removeChild(
                document.getElementById(`${this.name}-success`)
            )
        },5000)
                

    //delete button eventlistener

        document.addEventListener("click", (event)=>{
            if(event.target.id === `${this.name}-delete`){
                this.delete();
                }
        })
        
        
        
    }

    // delete method

    delete(){
        document.getElementById("displayProduct").removeChild(
            document.getElementById(`${this.name}-card`)
        )
        document.getElementById("alert").innerHTML += `<div class="${this.name} alert alert-danger" role="alert" id="${this.name}-deletealert">
        Product Deleted Sucessfully!
      </div>`

    // FADE DELETE ALERT
      setTimeout(()=>{
        document.getElementById("alert").removeChild(
            document.getElementById(`${this.name}-deletealert`)
        )
    },5000)
    
    }
}

document.getElementById("saveProduct").addEventListener("click", function() {

    // cocacola
    // 2
    // 1990
    const productName = document.getElementById("productName").value ;
    const productPrice = document.getElementById("productPrice").value ;
    const productYear = document.getElementById("productYear").value ;

    

    if(productName  && productPrice  && productYear ){
        
        const newProduct = new Product (productName, productPrice, productYear)

        document.getElementById("displayProduct").innerHTML += `<div class="card" id="${productName}-card">
            <div class="card-body">
                <strong>Product Name: </strong> ${productName} 
                <strong>Product Price: </strong> ${productPrice}
                <strong>Product Year: </strong> ${productYear}  
                <button type="button" class="btn btn-danger delete" id="${productName}-delete">Delete</button>
            </div>
        </div>`
        document.getElementById("alert-warning").innerHTML = ""
        
    }else{
        document.getElementById("alert-warning").innerHTML = `<div class="${productName} alert alert-warning" role="alert" id="${this.name}-warning">
                 Complete Required Fields Please
                </div>`
    }
    
});



