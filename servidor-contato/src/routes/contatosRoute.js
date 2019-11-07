const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")
const bodyParser = require("body-parser")

router.get("/", controller.getAll)
<<<<<<< HEAD
router.post("/criar",bodyParser.json(),controller.add)//o POST sempre cria (ele é capaz de criar) coisas o put é mais utilizado para edição
=======
router.post("/criar", bodyParser.json(), controller.add)
>>>>>>> Evita salvar contatos já existentes e não salva se os parametros não estiverem corretos

module.exports = router
