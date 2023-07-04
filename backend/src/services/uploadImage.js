const multer = require('multer');
const { path } = require('../app');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ "."+file.originalname.split(".")[1])
    }
})

const upload = multer({
    storage: storage
}).single('file')


module.exports = {upload: upload}