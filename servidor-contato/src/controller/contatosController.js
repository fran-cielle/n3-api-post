const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(contatos.agenda);
};

const add = (request, response) =>{
 
   model.agenda.contatos.push(request.body)//push é um método de uma array fornece um objeto que tem uma agenda dentro
  response.status(200).send()
}

module.exports = {
  getAll,
  add
}
