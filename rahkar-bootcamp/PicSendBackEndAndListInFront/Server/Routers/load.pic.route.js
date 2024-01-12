const express = ("express");
const router = express.Router;

// router.get('/images', async (req, res) => {
//     const pictures = await Picture.findAll();
//     res.json(pictures);
// });
// router.get('/images/:title', async (req, res) => {
//     const { title } = req.params;
//     const picture = await Picture.findOne({ where: { title } });

//     if (!picture) {
//         return res.status(404).json({ error: 'Picture not found' });
//     }

//     res.json(picture);
// });
module.exports = router;