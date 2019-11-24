var AlimentoPlano = require('../../model/Atleta/alimentoPlanoModel');

module.exports = function (router) {
    //(http://localhost:8080/api/alimento_planos)
    router.route('/alimento_planos')
        .post(function(request, response) {
            var alimentoPlanoData = request.body;
            var alimentoPlano = new AlimentoPlano();
            alimentoPlano.alimento = alimentoPlanoData.alimento;
            alimentoPlano.horaAlimento = alimentoPlanoData.horaAlimento;
            alimentoPlano.minutoAlimento = alimentoPlanoData.minutoAlimento;
            alimentoPlano.quantidade = alimentoPlanoData.quantidade;
            alimentoPlano.unidadeMedida = alimentoPlanoData.unidadeMedida;
            
            alimentoPlano.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'AlimentoPlano criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            AlimentoPlano.find(function(err, alimentoPlanos) {
                if (err)
                    response.send(err);

                response.json(alimentoPlanos);
            });
        });

    // (http://localhost:8080/api/alimento_planos/:alimento_plano_id)
    router.route('/alimento_planos/:alimento_plano_id')
        .get(function(request, response) {
            AlimentoPlano.findById(request.params.alimento_plano_id, function(err, alimentoPlano) {
                if (err)
                    response.send(err);
                response.json(alimentoPlano);
            });
        })
        .put(function(request, response) {
            AlimentoPlano.findById(request.params.alimento_plano_id, function(err, alimentoPlano) {

                if (err)
                    response.send(err);

                var alimentoPlanoData = request.body;
                alimentoPlano.alimento = alimentoPlanoData.alimento;
                alimentoPlano.horaAlimento = alimentoPlanoData.horaAlimento;
                alimentoPlano.minutoAlimento = alimentoPlanoData.minutoAlimento;
                alimentoPlano.quantidade = alimentoPlanoData.quantidade;
                alimentoPlano.unidadeMedida = alimentoPlanoData.unidadeMedida;
                alimentoPlano.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'AlimentoPlano atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            AlimentoPlano.remove({
                _id: request.params.alimento_plano_id
            }, function(err, alimentoPlano) {
                if (err)
                    response.send(err);

                response.json({ message: 'AlimentoPlano excluído com sucesso!' });
            });
        });
}