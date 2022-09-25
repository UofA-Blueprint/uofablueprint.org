const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({
    storage: storage
}).single('file')


module.exports = {upload: upload}