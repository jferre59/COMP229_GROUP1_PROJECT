const path = require('path');
try {
    const flowerController = require(path.resolve(__dirname, './controllers/Flower.js'));
    console.log("flowerController loaded successfully:", flowerController);
} catch (error) {
    console.error("Error loading flowerController:", error);
}
