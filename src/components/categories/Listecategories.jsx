import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const Listecategories = () => {
  const [categories, setCategories] = useState([]);
  const [isloading, setisLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://yessin-iit.vercel.app/api/api/Categorie');
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setisLoading(false);
    }
  };

  const deleteCartigorie = async (id) => {
    try {
      await axios.delete(`https://yessin-iit.vercel.app/api/api/Categorie/${id}`);
      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isloading) {
    return (
      <center>
        <ReactLoading type="spokes" color="#3498db" height={100} width={100} />
        <p>Loading categories...</p>
      </center>
    );
  }

  if (!categories.length) {
    return <center>No categories available. Please add one.</center>;
  }

  return (
    <div className="container">
      <center>
        <h1>Liste des Categories</h1>
      </center>
      <button className="btn btn-success btn-sm">
        <i className="fa-solid fa-square-plus"></i> Ajouter
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom Categorie</th>
            <th>Image Categorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td>{cat.nomcategorie}</td>
              <td>
                <img
                  src={cat.imagecategorie}
                  alt={cat.nomcategorie}
                  width="100"
                  height="100"
                />
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => alert(`Update categ ${cat.id}`)}
                >
                  <i className="fa-solid fa-edit"></i> Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCartigorie(cat.id)}
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listecategories;
