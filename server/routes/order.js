import express from 'express';
import mailer from '../services/mailer';

const router = express.Router();

router.post('/order', async (req, res, next) => {
  try {
    // const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const comment = req.body.comment;
    const email = req.body.email;
    const formName = req.body.formName;

    mailer(`${formName} cramler.ru`, { phone, comment, email});

    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});


export default router;
