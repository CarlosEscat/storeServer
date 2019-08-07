const { Router } = require("express");
const Advertisement = require("./model");
const router = new Router();

router.get("/advertisement", (req, res, next) =>
  Advertisement.findAll()
    .then(advertisements => {
      return res.json({ advertisements: advertisements });
    })
    .catch(error => next(error))
);

router.post("/advertisement", (req, res, next) => {
  Advertisement.create(req.body)
    .then(name => res.json(name))
    .catch(next);
});

router.get("/advertisement/:Id", (req, res, next) => {
  Advertisement.findByPk(req.params.Id)
    .then(advertisement => {
      if (!advertisement) {
        res.status(404).end();
      } else {
        res.json(advertisement);
      }
    })
    .catch(next);
});

router.put("/advertisement/:Id", (req, res, next) => {
  Advertisement.findByPk(req.params.Id)
    .then(advertisement => {
      if (advertisement) {
        return advertisement
          .update(req.body)
          .then(advertisement => res.json(advertisement));
      }
      return res.status(404).end();
    })
    .catch(next);
});

router.delete("/advertisement/:Id", (req, res, next) => {
  Advertisement.destroy({
    where: {
      id: req.params.Id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.send({ numDeleted });
      }
      return res.status(404).end();
    })
    .catch(next);
});

module.exports = router;
