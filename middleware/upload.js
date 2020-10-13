const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads/");
    },
    filename: function(req, file, cb){
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + Date.now() + ext);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif'){
            callback(null, true);
        } else{
            console.log('Please select a valid image type');
            callback(null, false);  
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = upload;
