//UserAccount Controller
const UserAccount = require('../models/UserAccount');

// Create a new user account
exports.createUserAccount = async (req, res) => {
    try {
        const userAccount = new UserAccount(req.body);
        await userAccount.save();
        res.status(201).json({ message: "User account added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all user accounts
exports.getAllUserAccounts = async (req, res) => {
    try {
        const userAccounts = await UserAccount.find();
        res.status(200).json(userAccounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user account
exports.updateUserAccount = async (req, res) => {
    try {
        const userAccount = await UserAccount.findOneAndUpdate({ userId: req.body.userId }, req.body, { new: true, runValidators: true });
        if (!userAccount) return res.status(404).json({ error: 'User account not found' });
        res.status(200).json({ message: "User account updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user account
exports.deleteUserAccount = async (req, res) => {
    try {
        const userAccount = await UserAccount.findOneAndDelete({ userId: req.body.userId });
        if (!userAccount) return res.status(404).json({ error: 'User account not found' });
        res.status(200).json({ message: 'User account deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
