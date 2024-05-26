// contactController.js
import Contact from '../models/contact.js';

export const createContact = async (req, res) => {
    const { firstName, lastName, email, choice, phone, message } = req.body;

    try {
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            choice,
            phone,
            message,
        });

        await newContact.save();

        res.status(201).json(newContact);
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
