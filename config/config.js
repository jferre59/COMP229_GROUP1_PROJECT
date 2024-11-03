//we will set up with mongo atlas database. For now I just set it to port 3000 to check if it runs on server
const config = {
    port: process.env.port || 3000,
};
module.exports = config;
