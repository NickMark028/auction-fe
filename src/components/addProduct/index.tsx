import React, { useEffect, useState, Fragment, ComponentState } from 'react';
import instance from 'utils/axiosClient';
import '../../styles/addproduct.scss';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
export const AddProduct: React.FC = () => {
  const [image, set] = useState<any>({ files: [] });
  const [product, setProduct] = useState({
    sellerId: localStorage.getItem('auction-user-id'),
    name: '',
    description: '',
    reservedPrice: '',
    priceStep: '',
    instantPrice: '',
    isRenewal: '1',
    coverImageUrl: '',
    productImage: [],
  });
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
    setProduct({
      ...product,
      coverImageUrl: files.base64,
    });
  }
  function getFiles(files: any) {
    const temp = [];
    files.forEach((element) => {
      temp.push(element.base64);
    });
    setProduct({
      ...product,
      productImage: temp,
    });
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

            <textarea
              className="form-control"
              placeholder="Enter Description"
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="form-3">
            <label>Price</label>
            <input
              type="number"
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

          <div className="form-7">
            <label>Cover image</label>
            <FileBase64 multiple={false} onDone={getFile} />
          </div>
          <div className="form-8">
            <label>Cover image</label>
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
