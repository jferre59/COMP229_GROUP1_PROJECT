//Catalog Controller
const mongoose = require('mongoose');
const Catalog = require('../models/Catalog'); 

// Create a new catalog entry
const createCatalogEntry = async (req, res) => {
    const catalogEntry = new Catalog(req.body);
    try {
        await catalogEntry.save();
        return res.status(201).json({ message: 'Catalog entry created successfully', catalogEntry });
    } catch (err) {
        return res.status(400).json({
            error: 'Error creating catalog entry',
            message: 'There was an issue creating the catalog entry. Please try again.',
            details: err.message
        });
    }
};

// Get all catalog entries
const getCatalogEntries = async (req, res) => {
    try {
        const catalogEntries = await Catalog.find();
        return res.status(200).json({ message: 'Catalog entries retrieved successfully', catalogEntries });
    } catch (err) {
        return res.status(400).json({
            error: 'Error fetching catalog entries',
            message: 'There was an issue fetching the catalog entries. Please try again.',
            details: err.message
        });
    }
};

// Get a single catalog entry by ID
const getCatalogEntryById = async (req, res) => {
    try {
        const { itemId } = req.body; // Extract the itemId from the request body
        const catalogEntry = await Catalog.findOne({ itemId }); // Find the catalog entry by itemId

        if (!catalogEntry) {
            return res.status(404).json({
                error: 'Catalog entry not found',
                message: 'The catalog entry you are looking for does not exist.'
            });
        }
        return res.status(200).json({ message: 'Catalog entry retrieved successfully', catalogEntry });
    } catch (err) {
        return res.status(400).json({
            error: 'Error fetching catalog entry',
            message: 'There was an issue fetching the catalog entry. Please try again.',
            details: err.message
        });
    }
};

// Update a catalog entry by ID
const updateCatalogEntry = async (req, res) => {
    try {
        const catalogEntry = await Catalog.findByIdAndUpdate(req.body.itemId, req.body, { new: true, runValidators: true });
        if (!catalogEntry) {
            return res.status(404).json({
                error: 'Catalog entry not found',
                message: 'The catalog entry you are trying to update does not exist.'
            });
        }
        return res.status(200).json({ message: 'Catalog entry updated successfully', catalogEntry });
    } catch (err) {
        return res.status(400).json({
            error: 'Error updating catalog entry',
            message: 'There was an issue updating the catalog entry. Please try again.',
            details: err.message
        });
    }
};

// Delete a catalog entry by ID
const deleteCatalogEntry = async (req, res) => {
    try {
        const catalogEntry = await Catalog.findByIdAndDelete(req.body.itemId);
        if (!catalogEntry) {
            return res.status(404).json({
                error: 'Catalog entry not found',
                message: 'The catalog entry you are trying to delete does not exist.'
            });
        }
        return res.status(200).json({
            message: 'Catalog entry deleted successfully'
        });
    } catch (err) {
        return res.status(400).json({
            error: 'Error deleting catalog entry',
            message: 'There was an issue deleting the catalog entry. Please try again.',
            details: err.message
        });
    }
};

module.exports = {
    createCatalogEntry,
    getCatalogEntries,
    getCatalogEntryById,
    updateCatalogEntry,
    deleteCatalogEntry
};