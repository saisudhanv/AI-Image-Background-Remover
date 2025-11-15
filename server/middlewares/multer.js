import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (re, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}` ) // Specify the destination directory
  }
});

const upload = multer({storage});
export default upload;