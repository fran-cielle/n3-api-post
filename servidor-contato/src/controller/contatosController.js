const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
  let coletaDados = request.body
  coletaDados.id = Math.random().toString(36).substr(-8)//para gerar um numero "automatico" no ID

  model.agenda.contatos.forEach(coletaDados => {
    if ((dado == coletaDados.nome) && (dado == coletaDados.dataNascimento)) {
      response.status(400).send()
    } else {
      return dado;
    }
  })

  let dados = model.agenda.contatos.push(coletaDados)//push é um método de uma array fornece um objeto que tem uma agenda dentro
  response.status(200).send()

}


module.exports = {
  getAll,
  add
}
