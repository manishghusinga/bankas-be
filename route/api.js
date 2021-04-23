const router = require("express").Router();
const musicData = require("./musicData");

router.get("/list", (req, res) => {
    return res.send({
        success: true,
        data: musicData
    })
});

module.exports = router;