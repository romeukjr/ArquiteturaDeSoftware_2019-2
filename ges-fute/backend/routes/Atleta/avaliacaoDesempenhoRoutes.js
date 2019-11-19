var AvaliacaoDesempenho = require('../../model/Atleta/avaliacaoDesempenhoModel');

module.exports = function (router) {
    //(http://localhost:8080/api/avaliacoes_desempenho)
    router.route('/avaliacoes_desempenho')
        .post(function(request, response) {
            var avaliacaoDesempenhoData = request.body;
            var avaliacaoDesempenho = new AvaliacaoDesempenho();
            avaliacaoDesempenho.data = avaliacaoDesempenhoData.data;
            avaliacaoDesempenho.responsavel = avaliacaoDesempenhoData.responsavel;
            avaliacaoDesempenho.peso = avaliacaoDesempenhoData.peso;
            avaliacaoDesempenho.tempoJogo = avaliacaoDesempenhoData.tempoJogo;
            avaliacaoDesempenho.percentualGordura = avaliacaoDesempenhoData.percentualGordura;
            avaliacaoDesempenho.velocidadeMedia = avaliacaoDesempenhoData.velocidadeMedia;
            
            avaliacaoDesempenho.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'AvaliacaoDesempenho criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            AvaliacaoDesempenho.find(function(err, avaliacoesMedicas) {
                if (err)
                    response.send(err);

                response.json(avaliacoesMedicas);
            });
        });

    // (accessed at POST http://localhost:8080/api/avaliacoes_desempenho/:avaliacao_desempenho_id)
    router.route('/avaliacoes_desempenho/:avaliacao_desempenho_id')
        .get(function(request, response) {
            AvaliacaoDesempenho.findById(request.params.avaliacoes_desempenhos_id, function(err, avaliacaoDesempenho) {
                if (err)
                    response.send(err);
                response.json(avaliacaoDesempenho);
            });
        })
        .put(function(request, response) {
            AvaliacaoDesempenho.findById(request.params.avaliacoes_desempenhos_id, function(err, avaliacaoDesempenho) {

                if (err)
                    response.send(err);

                var avaliacaoDesempenhoData = request.body;
                avaliacaoDesempenho.data = avaliacaoDesempenhoData.data;
                avaliacaoDesempenho.responsavel = avaliacaoDesempenhoData.responsavel;
                avaliacaoDesempenho.peso = avaliacaoDesempenhoData.peso;
                avaliacaoDesempenho.tempoJogo = avaliacaoDesempenhoData.tempoJogo;
                avaliacaoDesempenho.percentualGordura = avaliacaoDesempenhoData.percentualGordura;
                avaliacaoDesempenho.velocidadeMedia = avaliacaoDesempenhoData.velocidadeMedia;
                
                avaliacaoDesempenho.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'AvaliacaoDesempenho atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            AvaliacaoDesempenho.remove({
                _id: request.params.avaliacoes_desempenhos_id
            }, function(err, avaliacaoDesempenho) {
                if (err)
                    response.send(err);

                response.json({ message: 'AvaliacaoDesempenho excluído com sucesso!' });
            });
        });
}