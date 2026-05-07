import * as model from '../models/images.model.js'
import * as upload from '../middlewares/upload.middleware.js'
import { imagesSchema } from '../validations/images.validation.js';



// Récupérer toutes les images

export const getImage = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les images
        const images = await model.getImages();

        // Envoi des annonces au client
        res.json(images);

    } catch (error) {
        console.error(' Erreur getImages :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des images' });
    }
};

// Pour créer une nouvelle image

export const createImage = async (req, res) => {
    try {
        // Structure du body
        const { alt } = req.body;
        const nom = req.file ? req.file.filename : null;

        // Validation via Joi
        const { error } = imagesSchema.validate({ nom, alt });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer l'image
        const image = await model.createImages({ nom, alt });
       

        // Réponse succès
        res.status(201).json({ message: 'Image créée' });

    } catch (error) {
        console.error(' Erreur createImage :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création de l\'image' });
    }
};


// Pour récupérer desserts par Id

export const getImageById = async (req, res) => {
    try {
        const { id } = req.params;

        const desserts = await model.getDessertsById(id);

        if (!desserts) {
            return res.status(404).json({ message: 'desserts introuvables' });
        }

        res.json(desserts);

    } catch (error) {
        console.error('Erreur getDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des desserts' });
    }
};

// Mettre à jour des desserts par id 

export const updateImageById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingDesserts = await model.getDessertsById(id)

        if(!existingDesserts) {
            return res.status(404).json({message: 'Desserts introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.titre ?? existingDesserts.nom,
            prix: req.body.prix ?? existingDesserts.prix
        }

        // valdiation avec joi

        const { error } = dessertsSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateDessertsById(id, updatedData);

        res.json({ message: 'Desserts mis à jour' });

    } catch (error) {
        console.error('Erreur updateDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer un desserts par id 

export const deleteImageById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteDessertsById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Desserts introuvables' });
        }

        res.json({ message: 'Desserts supprimées' });

    } catch (error) {
        console.error('Erreur deleteDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};





 
