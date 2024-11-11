
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage/capaPorfolio');  // Diretório para salvar o upload
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);  // Nome do arquivo
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const isValid = allowedMimeTypes.includes(file.mimetype);
    cb(null, isValid);  // Retorna true se o tipo de arquivo é permitido
};

const uploadMiddleware = multer({ storage, fileFilter });

export default uploadMiddleware;
