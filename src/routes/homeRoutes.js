import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*

index -> Lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
