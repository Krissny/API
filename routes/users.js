import express from 'express';

const router = express.Router();

import {getUsers, createUser, findUser, deleteUser, UpdateUser } from '../controllers/users.js';

router.get('/',getUsers )

router.post('/',createUser )

router.get('/:id',findUser )

router.delete('/:id', deleteUser)

router.patch('/:id',UpdateUser )

export default router;