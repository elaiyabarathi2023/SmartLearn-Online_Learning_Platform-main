import multer from 'multer';

// Configure the storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // Set the destination folder for uploaded images
    callback(null, 'src/uploads/'); // You can customize the destination path
  },
  filename: (req, file, callback) => {
    // Set the filename for the uploaded image
    callback(null, Date.now() + '_' + file.originalname);
  },
});

// Create a multer instance with the configured storage
export const upload = multer({ storage });

