const mongoose = require('mongoose');

const CatalogSchema = new mongoose.Schema({
  itemId: {
    type: String,
    trim: true,
    //unique: true,
    required: 'Item ID is required'
  },
  flowerId: {
    type: String,
    trim: true,
    required: 'Flower ID is required'
  },
  vendorId: {
    type: String,
    trim: true,
    required: 'Vendor ID is required'
  },
  flowerName: {
    type: String,
    trim: true,
    required: 'Flower name is required'
  },
  description: {
    type: String,
    trim: true,
    required: 'Description is required'
  },
  price: {
    type: Number,
    required: true
  },
  imageUrls: {
    type: [String],
    required: 'At least one image URL is required'
  },
  category: {
    type: String,
    trim: true,
    required: 'Category is required'
  },
  quantity: {
    type: Number,
    required: true
  },
  availabilityStatus: {
    type: String,
    trim: true,
    required: 'Availability status is required'
  },
  occasions: {
    type: [String],
    trim: true,
    required: 'Occasions are required'
  },
  notes: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('catalogs', CatalogSchema);

