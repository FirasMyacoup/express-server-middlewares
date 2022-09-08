'use strict';

module.exports = () => {
    return (req, res, next) => {

        const num = req.query.num
        
        if(!isNaN(num)) {
            next();
        } else {
            next(`${num} not a number`)
        }
    }
};