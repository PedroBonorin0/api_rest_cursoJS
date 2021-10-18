"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)();

router.post('/', _TokenController2.default.store);

exports. default = router;

/*

index -> Lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
