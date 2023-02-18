module.exports = class HomeCtrl{
    static async HomeGetCtrl(req, res, next) {
        try {
            res.json({message: "Home page"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    
}