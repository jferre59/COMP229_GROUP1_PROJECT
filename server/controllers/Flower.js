//Flower Controller
const Flower = require('../models/Flower');

// Create a new flower
exports.createFlower = async (req, res) => {
    try {
        const flower = new Flower(req.body);
        await flower.save();
        res.status(201).json({ message: "Flower added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all flowers
exports.getAllFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.status(200).json(flowers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get flower by ID
exports.getFlowerById = async (req, res) => {
    try {
        const { flowerId } = req.body; // Extract the ID from the request body
        const flower = await Flower.findOne({flowerId}); // Find the flower by ID

        if (!flower) {
            return res.status(404).json({ error: 'Flower not found' });
        }

        res.status(200).json(flower);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Update a flower
exports.updateFlower = async (req, res) => {
    try {
        const flower = await Flower.findOneAndUpdate({ flowerId: req.body.flowerId }, req.body, { new: true, runValidators: true });
        if (!flower) return res.status(404).json({ error: 'Flower not found' });
        res.status(200).json({ message: "Flower updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a flower
exports.deleteFlower = async (req, res) => {
    try {
        const flower = await Flower.findOneAndDelete({ flowerId: req.body.flowerId });
        if (!flower) return res.status(404).json({ error: 'Flower not found' });
        res.status(200).json({ message: 'Flower deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
