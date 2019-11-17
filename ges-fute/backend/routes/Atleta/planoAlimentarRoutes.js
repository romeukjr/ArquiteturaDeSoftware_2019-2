var PlanoAlimentar = require('../../model/Atleta/planoAlimentar');

module.exports = function (router) {
    //(http://localhost:8080/api/planos_alimentares)
    router.route('/planos_alimentares')
        .post(function(request, response) {
            var planoAlimentarData = request.body;
            var planoAlimentar = new PlanoAlimentar();
            planoAlimentar.dataInicio = planoAlimentarData.dataInicio;
            planoAlimentar.dataFim = planoAlimentarData.dataFim;
            planoAlimentar.qtdKCal = planoAlimentarData.qtdKCal;
            planoAlimentar.qtdProteinas = planoAlimentarData.qtdProteinas;
            planoAlimentar.qtdGordura = planoAlimentarData.qtdGordura;
            planoAlimentar.qtdAminoacidos = planoAlimentarData.qtdAminoacidos;
            planoAlimentar.qtdMicronutrientes = planoAlimentarData.qtdMicronutrientes;
            planoAlimentar.qtdMacronutrientes = planoAlimentarData.qtdMacronutrientes;
            planoAlimentar.alimentosPlano = planoAlimentarData.alimentosPlano;
            
            planoAlimentar.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'PlanoAlimentar criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            PlanoAlimentar.find(function(err, planoAlimentars) {
                if (err)
                    response.send(err);

                response.json(planoAlimentars);
            });
        });

    // (accessed at POST http://localhost:8080/api/planos_alimentares/:planos_alimentares_id)
    router.route('/planos_alimentares/:planos_alimentares_id')
        .get(function(request, response) {
            PlanoAlimentar.findById(request.params.planos_alimentares_id, function(err, planoAlimentar) {
                if (err)
                    response.send(err);
                response.json(planoAlimentar);
            });
        })
        .put(function(request, response) {
            PlanoAlimentar.findById(request.params.planos_alimentares_id, function(err, planoAlimentar) {

                if (err)
                    response.send(err);

                var planoAlimentarData = request.body;
                planoAlimentar.dataInicio = planoAlimentarData.dataInicio;
                planoAlimentar.dataFim = planoAlimentarData.dataFim;
                planoAlimentar.qtdKCal = planoAlimentarData.qtdKCal;
                planoAlimentar.qtdProteinas = planoAlimentarData.qtdProteinas;
                planoAlimentar.qtdGordura = planoAlimentarData.qtdGordura;
                planoAlimentar.qtdAminoacidos = planoAlimentarData.qtdAminoacidos;
                planoAlimentar.qtdMicronutrientes = planoAlimentarData.qtdMicronutrientes;
                planoAlimentar.qtdMacronutrientes = planoAlimentarData.qtdMacronutrientes;
                planoAlimentar.alimentosPlano = planoAlimentarData.alimentosPlano;
                planoAlimentar.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'PlanoAlimentar atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            PlanoAlimentar.remove({
                _id: request.params.planos_alimentares_id
            }, function(err, planoAlimentar) {
                if (err)
                    response.send(err);

                response.json({ message: 'PlanoAlimentar excluído com sucesso!' });
            });
        });
}