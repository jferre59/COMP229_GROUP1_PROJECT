//Vendor Controller
const Vendor = require('../models/Vendor');

// Create a new vendor
exports.createVendor = async (req, res) => {
    try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json({ message: "Vendor added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all vendors
exports.getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get vendor by ID
exports.getVendorById = async (req, res) => {
    try {
        const { vendorId } = req.body; // Extract the ID from the request body
        const vendor = await Vendor.findOne({vendorId}); // Find the Vendor by ID

        if (!vendor) {
            return res.status(404).json({ error: 'vendor not found' });
        }

        res.status(200).json(vendor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Update a vendor
exports.updateVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findOneAndUpdate({ vendorId: req.body.vendorId }, req.body, { new: true, runValidators: true });
        if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
        res.status(200).json({ message: "Vendor updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a vendor
exports.deleteVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findOneAndDelete({ vendorId: req.body.vendorId });
        if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
        res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
