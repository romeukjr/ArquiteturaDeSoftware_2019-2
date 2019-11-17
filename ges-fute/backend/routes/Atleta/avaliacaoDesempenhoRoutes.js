var AvaliacaoDesempenho = require('../../model/Atleta/avaliacaoMedicaDesempenho');

module.exports = function (router) {
    //(http://localhost:8080/api/avaliacoes_desempenho)
    router.route('/avaliacoes_desempenho')
        .post(function(request, response) {
            var avaliacaoMedicaData = request.body;
            var avaliacaoMedica = new AvaliacaoMedica();
            avaliacaoMedica.data = avaliacaoMedicaData.data;
            avaliacaoMedica.responsavel = avaliacaoMedicaData.responsavel;
            avaliacaoMedica.peso = avaliacaoMedicaData.peso;
            avaliacaoMedica.tempoJogo = avaliacaoMedicaData.tempoJogo;
            avaliacaoMedica.percentualGordura = avaliacaoMedicaData.percentualGordura;
            avaliacaoMedica.velocidadeMedia = avaliacaoMedicaData.velocidadeMedia;
            
            avaliacaoMedica.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'AvaliacaoMedica criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            AvaliacaoMedica.find(function(err, avaliacoesMedicas) {
                if (err)
                    response.send(err);

                response.json(avaliacoesMedicas);
            });
        });

    // (accessed at POST http://localhost:8080/api/avaliacoes_desempenho/:avaliacao_desempenho_id)
    router.route('/avaliacoes_desempenho/:avaliacao_desempenho_id')
        .get(function(request, response) {
            AvaliacaoMedica.findById(request.params.avaliacoes_desempenhos_id, function(err, avaliacaoMedica) {
                if (err)
                    response.send(err);
                response.json(avaliacaoMedica);
            });
        })
        .put(function(request, response) {
            AvaliacaoMedica.findById(request.params.avaliacoes_desempenhos_id, function(err, avaliacaoMedica) {

                if (err)
                    response.send(err);

                var avaliacaoMedicaData = request.body;
                avaliacaoMedica.data = avaliacaoMedicaData.data;
                avaliacaoMedica.responsavel = avaliacaoMedicaData.responsavel;
                avaliacaoMedica.peso = avaliacaoMedicaData.peso;
                avaliacaoMedica.tempoJogo = avaliacaoMedicaData.tempoJogo;
                avaliacaoMedica.percentualGordura = avaliacaoMedicaData.percentualGordura;
                avaliacaoMedica.velocidadeMedia = avaliacaoMedicaData.velocidadeMedia;
                
                avaliacaoMedica.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'AvaliacaoMedica atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            AvaliacaoMedica.remove({
                _id: request.params.avaliacoes_desempenhos_id
            }, function(err, avaliacaoMedica) {
                if (err)
                    response.send(err);

                response.json({ message: 'AvaliacaoMedica excluído com sucesso!' });
            });
        });
}