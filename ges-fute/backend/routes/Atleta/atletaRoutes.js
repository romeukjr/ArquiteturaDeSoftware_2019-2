var Atleta = require('../../model/Atleta/atletaModel');

module.exports = function (router) {
    //(http://localhost:8080/api/atletas)
    router.route('/atletas')
        .post(function(request, response) {
            var atletaData = request.body;
            var atleta = new Atleta();
            atleta.nome = atletaData.nome;
            atleta.idade = atletaData.idade;
            atleta.altura = atletaData.altura;
            atleta.alergias = atletaData.alergias;

            if (atletaData.avaliacoesMedicas) {
                atleta.avaliacoesMedicas = atletaData.avaliacoesMedicas;
            }

            if (atletaData.avaliacoesDesempenho) {
                atleta.avaliacoesDesempenho = atletaData.avaliacoesDesempenho;
            }

            if (atletaData.planosAlimentares) {
                atleta.planosAlimentares = atletaData.planosAlimentares;
            }
            
            atleta.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Atleta criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            Atleta.find(function(err, atletas) {
                if (err)
                    response.send(err);

                response.json(atletas);
            });
        });

    // (http://localhost:8080/api/atletas/:atleta_id)
    router.route('/atletas/:atleta_id')
        .get(function(request, response) {
            Atleta.findById(request.params.atleta_id, function(err, atleta) {
                if (err)
                    response.send(err);
                response.json(atleta);
            });
        })
        .put(function(request, response) {
            Atleta.findById(request.params.atleta_id, function(err, atleta) {

                if (err)
                    response.send(err);

                var atletaData = request.body;
                atleta.nome = atletaData.nome;
                atleta.idade = atletaData.idade;
                atleta.altura = atletaData.altura;
                atleta.alergias = atletaData.alergias;
    
                if (atletaData.avaliacoesMedicas) {
                    atleta.avaliacoesMedicas = atletaData.avaliacoesMedicas;
                }
    
                if (atletaData.avaliacoesDesempenho) {
                    atleta.avaliacoesDesempenho = atletaData.avaliacoesDesempenho;
                }
    
                if (atletaData.planosAlimentares) {
                    atleta.planosAlimentares = atletaData.planosAlimentares;
                }
                
                atleta.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Atleta atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            Atleta.remove({
                _id: request.params.atleta_id
            }, function(err, atleta) {
                if (err)
                    response.send(err);

                response.json({ message: 'Atleta excluído com sucesso!' });
            });
        });
}