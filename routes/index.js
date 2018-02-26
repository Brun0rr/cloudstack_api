var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var cs = require('../config/cloudstack.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/infraestrutura/instancias', function(req, res, next) {
  var client = new Client();
  var args = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  var params = {
    listall: true
  };
  client.get(cs.signParamString('listVirtualMachines', params), function(data, response) {
    // raw response
    console.log(data);
    // console.log(data.listvirtualmachinesresponse.virtualmachine[1]);
    res.render('infraestrutura/instancias', {
      vms: data.listvirtualmachinesresponse.virtualmachine
    });
    // res.status(200).json(data);
    // console.log(response);
  });
});

router.get('/infraestrutura/instancias/stop/:id', function(req, res, next) {
  var client = new Client();
  var args = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  var params = {
    id: req.params.id
  };
  client.get(cs.signParamString('stopVirtualMachine', params), function(data, response) {
    res.json({ data });
  });
});

router.get('/infraestrutura/instancias/start/:id', function(req, res, next) {
  var client = new Client();
  var args = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  var params = {
    id: req.params.id
  };
  client.get(cs.signParamString('startVirtualMachine', params), function(data, response) {
    res.json({ data });
  });
});

router.get('/infraestrutura/instancias/reboot/:id', function(req, res, next) {
  var client = new Client();
  var args = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  var params = {
    id: req.params.id
  };
  client.get(cs.signParamString('rebootVirtualMachine', params), function(data, response) {
    res.json({ data });
  });
});

module.exports = router;
