const Ultraman = require('../models/ultramanModel');

exports.getUltramans = async (req, res) => {
    try {
        const heroes = await Ultraman.find();
        res.status(200).json({
            success: true,
            data: heroes
        })
    }
    catch  (error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

};