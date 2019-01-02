import express from 'express';
import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.use(require('./routes/order').default);

router.post('/file', async (req, res, next) => {
  try {
    const data = await getFormData(req);
    const file = data.files.file[0];
    const originalFileName = file.originalFilename.split(' ').join('_');
    const fileName = `${Date.now()}_${originalFileName}`;
    const dateFolder = getDateFolderName();
    const uploadDir = getUploadPath(dateFolder);
    const imagePath = path.join(uploadDir, fileName);
    await fs.rename(file.path, imagePath);
    res.json({
      status: 'success',
      path: path.join(dateFolder, fileName),
    });
  } catch (e) {
    next(e);
  }
});

const getFormData = req =>
  new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      const data = [];
      Object.keys(fields).map((key) => {
        data[key] = fields[key].pop();
        return null;
      });
      return resolve({ fields, files });
    });
  });

const getDateFolderName = () => {
  const date = new Date();
  return `${date.getFullYear()}_${date.getDate()}_${date.getMonth() + 1}`;
};

const getUploadPath = (dateFolderPath) => {
  let uploadDir = '../uploads';
  uploadDir = path.join(__dirname, uploadDir, dateFolderPath);
  const thumbnail = path.join(uploadDir, 'thumbnails');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  return uploadDir;
};


export default router;
