import React, { useEffect, useState, Fragment } from 'react';
import { setConstantValue } from 'typescript';
import { Link } from 'react-router-dom';
import { instance } from 'utils/utils';

export const Productlist: React.FC = () => {
  const [customers, set] = useState([]);
  useEffect(() => {
    instance.get('/api/product').then((res) => set(res.data));

    // console.log(customers);
  }, []);

  async function submitForm(id: any) {
    // console.log(id);
    instance
      .delete('/api/product', {
        data: {
          id: id,
        },
      })
      .then((res) => {
      console.log(res)
      window.alert('delete success')
    }
      ).catch((err)=>{
        console.log(err.response)
        window.alert('delete failed')
      });
  }

  function update(id: any) {
    // console.log(id);
    let filteredArray = customers.filter((item) => item.id !== id);
    set(filteredArray);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">product id</th>
                <th scope="col">seller id</th>
                <th scope="col">name</th>
                <th scope="col">description</th>
                <th scope="col">reserved price</th>
                <th scope="col">price step</th>
                <th scope="col">instant prince</th>
                <th scope="col">is renewal </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.sellerId}</td>
                  <td>{customer.name}</td>
                  <td>{customer.description}</td>
                  <td>{customer.reservedPrice}</td>
                  <td>{customer.priceStep}</td>
                  <td>{customer.instantPrice}</td>
                  <td>{customer.isRenewal}</td>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="btn-group"
                        style={{ marginBottom: '20px' }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            update(customer.id);
                            submitForm(customer.id);
                          }}
                        >
                          Delete product
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
