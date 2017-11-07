var db = require('../models');
var Manager = db.models.Manager;

module.exports.index = (req, res) => {
  Manager.findAll().then(function(managers) {
    res.json(managers);
  });
};

module.exports.show = (req, res) => {
  Manager.findById(req.params.id).then(manager => {
    if (!manager) res.send('Manager NOT found');
    res.json(manager);
  });
};

module.exports.create = (req, res) => {
  Manager.create(req.body).then(manager => {
    if (!manager) return error('Manager not saved');
    res.json(manager);
  });
};

module.exports.update = (req, res) => {
  Manager.findById(req.params.id).then(manager => {
    if (!manager) return error("Manager not found");
    return manager.updateAttributes(req.body);
  }).then(manager => {
    res.json(manager);
  });
};

module.exports.destroy = (req, res) => {
  Manager.findById(req.params.id).then(manager => {
    if (!manager) return error("Manager not found");
    return manager.destroy();
  }).then(() => {
    res.send('Manager deleted.');
  });
};