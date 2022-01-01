
import React, {useEffect, useState, Fragment, ComponentState } from "react";
import { instance } from 'Utils';
import "../../styles/addproduct.scss"




export const AddProduct: React.FC = () => {

    const [product,setProduct] =useState({
        sellerId: '1000053',
        name: '',
        description: '',
        reservedPrice: '',
        priceStep: '',
        instantPrice: '',
        isRenewal: '1',
        coverImageURL:""

    });

  async function submitForm() {
    const photo = product.coverImageURL
   let formdata = new FormData();
   formdata.append("product[images_attributes[0][file]]",JSON.parse(JSON.stringify( {uri: photo, name: 'image.jpg', type: 'image/jpeg'})))
  // product.coverImageURL=formdata
   // console.log({ email, password });
    instance.post('/product',
 
        product

    ).then(

      res=>console.log(res)
      
    )
  }

  function handleChange(evt) {
    const value = evt.target.value;
  
    
  setProduct({
    ...product,
    [evt.target.name]: value
  });
  }
function handlecheck(evt){
    const value =evt.target.checked;

    if(value==true)
    setProduct({
        ...product,
        [evt.target.name]: "1"
      });
    else{
        setProduct({
            ...product,
            [evt.target.name]: "0"
          });
    }
      
}
  
  return (
    <div className="outer1">
    <div className="inner1">
    <form>

    <h3>Add product</h3>

    <div className="form-1">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Enter product name"  name="name"  
           onChange={e=>handleChange(e)}/>
    </div>
    <div className="form-2">
        <label>Description</label>
        
        <textarea 
           className="form-control" placeholder="Enter Description"  name="description"  onChange={handleChange}
         />
    </div>

    <div className="form-3">
        <label>Price</label>
        <input type="number" className="form-control" placeholder="Enter reserve price"  name="reservedPrice"  onChange={handleChange}
         />
    </div>

    <div className="form-4">
        <label>Price step</label>
        <input type="number" className="form-control" placeholder="Enter price step"  name="priceStep"onChange={handleChange}
           />
    </div>

    <div className="form-5">
        <label>Instant price</label>
        <input type="number" className="form-control" placeholder="Enter instant price"  name="instantPrice"  onChange={handleChange}
           />
    </div>
  
    <div className="form-6">
    <input type="checkbox"  name="isRenewal"  onChange={handlecheck} />
    <label>Renewal</label>
       
    </div>

    <div className="form-7">
        <label>Cover image</label>
        <input type="file" className="form-control" placeholder="Enter cover image"  name="coverImageURL"  onChange={handleChange}
          />
    </div>

    

    <button type="button" className="btn btn-dark btn-lg btn-block"  onClick={submitForm}>Add</button>
    <p className="forgot-password text-right">
       
    </p>
</form>
</div>
      </div>
  );
};

