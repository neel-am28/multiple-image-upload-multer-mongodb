const Photo = require('../models/imagesModel');

imgsData = Photo.find({});
// display all photos
const index = (req, res, next) => {
    Photo.find()
        .then((result) => {
            // res.send(result);
            res.render('index', { records: result});
        })
        .catch((error) => {
            res.render('index', { message: "An error occured" });       
        })
}

const post = (req, res, next) => {
    let photo = new Photo({});
    if(req.files){
        let imgname = "";
        req.files.forEach((file) => {
            imgname = imgname + file.filename + ","
        });
        imgname = imgname.substring(0, imgname.lastIndexOf(','));
        photo.photos = imgname;
        // res.send(photo);
        photo.save((err, data) => {
            if(err) throw err;
            imgsData.exec((err, data) => {
                // res.send(data);
                res.render('index', { records: data});
            });
        });
    }
}

module.exports = {
    index, post
}