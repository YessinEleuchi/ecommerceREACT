import axios from 'axios'; // Importation d'axios pour effectuer des requêtes HTTP
import React, { useState } from 'react'; // Importation des hooks React

const Addcategorie = () => {
  // États pour stocker les données du formulaire
  const [nomcategorie, setNomcategorie] = useState(''); // Nom de la catégorie
  const [imagecategorie, setImagecategorie] = useState(''); // URL de l'image de la catégorie

  // État pour afficher un message de succès ou d'erreur
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      // Création d'un objet pour l'envoi des données
      const category = {
        nomcategorie,
        imagecategorie,
      };

      // Appel à l'API pour ajouter une nouvelle catégorie
      await axios.post('https://khalil-iit-nud5.vercel.app/api/api/categories', category);
      setMessage('Catégorie ajoutée avec succès !'); // Message de succès
      setNomcategorie(''); // Réinitialisation du formulaire
      setImagecategorie('');
    } catch (error) {
      console.log(error);
      setMessage('Erreur lors de l\'ajout de la catégorie'); // Message d'erreur
    }
  };

  return (
    <div className="container">
      {/* En-tête de la page */}
      <center>
        <h1>Ajouter une Catégorie</h1>
      </center>

      {/* Formulaire pour ajouter une nouvelle catégorie */}
      <form onSubmit={handleSubmit}>
        {/* Champ pour le nom de la catégorie */}
        <div className="form-group">
          <label>Nom de la Catégorie :</label>
          <input
            type="text"
            className="form-control"
            value={nomcategorie}
            onChange={(e) => setNomcategorie(e.target.value)}
            required
          />
        </div>

        {/* Champ pour l'URL de l'image */}
        <div className="form-group">
          <label>Image de la Catégorie (URL) :</label>
          <input
            type="text"
            className="form-control"
            value={imagecategorie}
            onChange={(e) => setImagecategorie(e.target.value)}
            required
          />
        </div>

        {/* Bouton pour soumettre le formulaire */}
        <button type="submit" className="btn btn-success btn-block">
          <i className="fa-solid fa-save"></i> Ajouter
        </button>
      </form>

      {/* Affichage du message de succès ou d'erreur */}
      {message && (
        <div className={`alert ${message.includes('Erreur') ? 'alert-danger' : 'alert-success'} mt-3`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Addcategorie; // Exportation du composant pour être utilisé ailleurs
