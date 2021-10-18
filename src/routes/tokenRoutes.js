import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;

/*

index -> Lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
