import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
const ListeArticle = () => {
    const [articles, setArticles] = useState([]);
const [isloading, setisLoading] = useState(true);
    // Fetch articles from the API
    const fetchArticles = async () => {
        try {
            const res = await axios.get('https://khalil-iit-nud5.vercel.app/api/api/articles');
            setArticles(res.data);
            setisLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

      // Fetch articles on component mount
      useEffect(() => {
        fetchArticles();
    },[]);
if(isloading){
  return (
 <center >
        <ReactLoading type="spokes" color="#3498db" height={100} width={100} />
   
        </center>
  );
}


    return (
        <div className="container">
           <center> <h1>Liste des Articles</h1> </center>
           <button className="btn btn-success btn-sm" ><i class="fa-solid fa-square-plus"></i> Ajouter</button>
         
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Designation</th>
                        <th>Marque</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Sous-Catégorie</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((art,index) => 
                            <tr key={index}>
                                <td>{art.reference}</td>
                                <td>{art.designation}</td>
                                <td>{art.marque}</td>
                                <td>{art.prix}</td>
                                <td>{art.qtestock}</td>
                                <td><img src={art.imageart} alt={art.designation} width="100" height="100"/></td>
                                <td>{art.scategorieID }</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => alert(`Update article ${article.id}`)}
                                    ><i class="fa-solid fa-edit"></i>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteArticle(article.id)}
                                    ><i class="fa-solid fa-trash"></i> 
                                        Delete
                                    </button>
                                </td>
                            </tr>
                                
                                )
                        }
                </tbody>
            </table>
        </div>
    );
};

export default ListeArticle;
