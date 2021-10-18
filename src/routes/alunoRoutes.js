import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;

/*

index -> Lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
