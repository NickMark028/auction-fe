import React, { useEffect, useState, Fragment, ComponentState } from 'react';
import instance from 'utils/axiosClient';
import '../../styles/addproduct.scss';
import FileBase64 from 'react-file-base64';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DateTimePicker from 'react-datetime-picker';
import Multiselect from 'multiselect-react-dropdown';
export const AddProduct: React.FC = () => {
  const [product, setProduct] = useState({
    sellerId: localStorage.getItem('auction-user-id'),
    name: '',
    description: '',
    reservedPrice: '',
    priceStep: '',
    instantPrice: '',
    timeExpired:'',
    category:[],
    isRenewal: '1',
    coverImageUrl: '',
    productImage: [],
  });
  const [value, setValue] = useState('');
  const [time, settime] = useState('');
  const [category, set] = useState([
    {
      section: '',
      categories: [],
    },
  ]);
  function hasNull(target) {
    for (var member in target) {
      if (target[member] == '') return true;
    }
    return false;
  }
  async function submitForm() {


 
    console.log(product);
    if (hasNull(product)) {
      window.alert('field must not emty');
    } else {
      instance
        .post('/api/product', {
          product,
        })
        .then((res) => {
          window.alert('add success');
          console.log(res);
        })
        .catch((err) => {
          window.alert(err.response.data.status);
          console.log(err.response);
        });
    }
  }
useEffect(()=>{
setProduct({
  ...product,
  description:value
})
},[value])
useEffect(()=>{
  setProduct({
    ...product,
    timeExpired:time
  })
  },[time])
useEffect(() => {
    instance.get('/api/category').then((res) => set(res.data));

     
  }, []);

  function tolist(){
const list = []
var temp;
  category.forEach((element:any) => {
      element.categories.forEach(element1 => {
        temp={
          name:element1.name,
          id:element1.id
        }
        list.push(temp)
      });
  });

  return list

}
  function handleChange(evt) {
    const value = evt.target.value;
    
    setProduct({
      ...product,
      [evt.target.name]: value,
    });
  }

  function handlecheck(evt) {
    const value = evt.target.checked;

    if (value == true)
      setProduct({
        ...product,
        [evt.target.name]: '1',
      });
    else {
      setProduct({
        ...product,
        [evt.target.name]: '0',
      });
    }
  }
  function getFile(files) {
    if(files.size.replace(/[^0-9]/g, '')>5000){
      files=null
      window.alert('file must be smaller than 5mb');
    }else{
    setProduct({
      ...product,
      coverImageUrl: files.base64,
    });}
  }
  function getFiles(files: any) {
    const temp = [];
    files.forEach((element) => {
      if(element.size.replace(/[^0-9]/g, '')>5000){
        files=null
        window.alert('file must be smaller than 5mb');
        
      }else{
      temp.push(element.base64);}
    });
    setProduct({
      ...product,
      productImage: temp,
    });
  }
  function onSelect(selectedList:any, selectedItem:any) {
    console.log(selectedList)
    setProduct({
      ...product,
      category:selectedList
    })
   
}
  return (
    <div className="outer1">
      <div className="inner1">
        <form>
          <div className="form-1">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-2">
            <label>Description</label>

            <ReactQuill theme="snow"  onChange={setValue}/>
          </div>
            <div className="multi-select"> 
            <Multiselect
            options={tolist()} // Options to display in the dropdown
          //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
           onSelect={onSelect} // Function will trigger on select event
       //  onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
              />
            </div>
          <div className="form-3">
            <label>Price</label>
            <input
              type="number"
              min="0"
              className="form-control"
              placeholder="Enter reserve price"
              name="reservedPrice"
              onChange={handleChange}
            />
          </div>

          <div className="form-4">
            <label>Price step</label>
            <input
              type="number"
              min="0"
              className="form-control"
              placeholder="Enter price step"
              name="priceStep"
              onChange={handleChange}
            />
          </div>

          <div className="form-5">
            <label>Instant price</label>
            <input
              type="number"
              min="0"
              className="form-control"
              placeholder="Enter instant price"
              name="instantPrice"
              onChange={handleChange}
            />
          </div>

          <div className="form-6">
            <input type="checkbox" name="isRenewal" onChange={handlecheck} />
            <label>Renewal</label>
          </div>

          <div>
          <input
              type="date"
              className="form-control"
              placeholder="Enter your date"
              name="timeExpired"
              onChange={handleChange}
            />
    </div>
          <div className="form-7">
            <label>Cover image</label>
            <FileBase64 multiple={false} onDone={getFile} />
          </div>
          <div className="form-8">
            <label>Product image</label>
            <FileBase64 multiple={true} onDone={getFiles} />
          </div>
          <p className="forgot-password text-right"></p>
        </form>
        <button
          type="button"
          className="btn btn-dark btn-lg btn-block"
          onClick={submitForm}
        >
          Add
        </button>
      </div>
    </div>
  );
};
