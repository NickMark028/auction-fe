import React, { useEffect, useState, Fragment } from 'react';
import { isTemplateSpan, setConstantValue } from 'typescript';
import { Link } from 'react-router-dom';
import  instance  from 'utils/axiosClient';


export const CategoryList: React.FC = () => {
  const [category, set] = useState([{
      section:'',
      categories:[]
  }]);
  useEffect(() => {
    instance.get('/api/category').then((res) => set(res.data));

    console.log(category);
  }, []);

  async function submitForm(path: any,id:any) {
    console.log(path);
    instance
      .delete('/api/product', {
        data: {
          path: path,
          id:id
        },
      })
      .then((res) => console.log(res));
  }

  function update(id: any) {
  //  console.log(category);

const temp1=[];
 category.forEach(item=>{
  const temp2=({
    section:item.section,
    categories:item.categories=item.categories.filter(item1=>item1.id!=id
        )}
    )
   temp1.push(temp2)

}
 )
//   set({
//       ...category,
//       section:temp1,
//       category:temp
//   })
  console.log(temp1)
        
      
    set(temp1);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">Section</th>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">path</th>
              </tr>
            </thead>
            <tbody>
              {category.map((category1) => (
                    < >
                    {category1.categories.map((category2) => (
                       <tr>
                        <td>{category1.section}</td>
                         <td>{category2.id}</td>
                         <td>{category2.name}</td>
                         <td>{category2.path}</td>
                        <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="btn-group"
                        style={{ marginBottom: '20px' }}
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `edit/${category2.id}`;
                          }}
                        >
                          {' '}
                          Edit category
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            update(category2.id);
                            submitForm(category2.path,category2.id);
                          }}
                        >
                          Delete category
                        </button>
                      </div>
                    </div>
                         </td>
                         </tr>
                    ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
