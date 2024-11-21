import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

const Listescategories = () => {
    const [scategories, setScategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    // Fetch Categories from the API
    const fetchScategories = async () => {
        try {
            const res = await axios.get('https://yessin-iit.vercel.app/api/api/SousCategorie');
            setScategories(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch scategories on component mount
    useEffect(() => {
        fetchScategories();
    }, []);

    // Delete Scategorie function
    const deleteScategorie = async (id) => {
        try {
            await axios.delete(`https://yessin-iit.vercel.app/api/api/SousCategorie/${id}`);
            setScategories(scategories.filter(scat => scat.id !== id)); // Remove deleted category from the state
        } catch (error) {
            console.error('Error deleting scategorie', error);
        }
    };

    if (isLoading) {
        return (
            <center>
                <ReactLoading type="spokes" color="#3498db" height={100} width={100} />
            </center>
        );
    }

    return (
        <div className="container">
            <center><h1>Liste des Scategories</h1></center>
            <button className="btn btn-success btn-sm" onClick={() => navigate('/categorie/add')}>
                <i className="fa-solid fa-square-plus"></i> Ajouter
            </button>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>nomscategorie</th>
                    <th>imagescategorie</th>
                    <td>categorieID</td>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {scategories.map((scat, index) => (
                    <tr key={index}>
                        <td>{scat.nomscategorie}</td>
                        <td><img src={scat.imagescategorie} alt={scat.nomscategorie} width="100" height="100" /></td>
                        <td>{scat.categorieID}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => navigate(`/categorie/update/${scat.id}`)}
                            >
                                <i className="fa-solid fa-edit"></i> Update
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteScategorie(scat.id)}
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

export default Listescategories;
