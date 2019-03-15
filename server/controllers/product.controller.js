const config = require('../config')

const sql = config.knex;

const productController = {

    getProduct: (req, res) => {

        sql.select()
            .from('Products')
            .where({ 'productID': req.pramas.productID })
            .then((result) => {
                return res.json({
                    success: true,
                    product: result[0]
                })
            })
            .catch((err) => {
                return res.json({
                    success: false,
                    err: err,
                    message: err.sqlMessage
                })
            })
    },

    allProducts: (req, res) => {
        
        sql.select()
            .from('Products')
            .then((result) => {
                return res.json({
                    success: true,
                    products: result
                })
            })
            .catch((err) => {
                return res.json({
                    success: false,
                    err: err,
                    message: err.sqlMessage
                })
            })
    },

    searchProducts: (req, res) => {

    }
}

module.exports = productController