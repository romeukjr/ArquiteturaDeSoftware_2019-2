var AvaliacaoMedica = require('../../model/Atleta/avaliacaoMedicaModel');

module.exports = function (router) {
    //(http://localhost:8080/api/avaliacoes_medicas)
    router.route('/avaliacoes_medicas')
        .post(function(request, response) {
            var avaliacaoMedicaData = request.body;
            var avaliacaoMedica = new AvaliacaoMedica();
            avaliacaoMedica.data = avaliacaoMedicaData.data;
            avaliacaoMedica.responsavel = avaliacaoMedicaData.responsavel;
            avaliacaoMedica.peso = avaliacaoMedicaData.peso;
            avaliacaoMedica.temperaturaCorporal = avaliacaoMedicaData.temperaturaCorporal;
            avaliacaoMedica.pressao = avaliacaoMedicaData.pressao;
            avaliacaoMedica.batimentosCardiacos = avaliacaoMedicaData.batimentosCardiacos;
            avaliacaoMedica.lesao = avaliacaoMedicaData.lesao;
            
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

    // (accessed at POST http://localhost:8080/api/avaliacoes_medicas/:avaliacao_medica_id)
    router.route('/avaliacoes_medicas/:avaliacao_medica_id')
        .get(function(request, response) {
            AvaliacaoMedica.findById(request.params.avaliacoes_medicas_id, function(err, avaliacaoMedica) {
                if (err)
                    response.send(err);
                response.json(avaliacaoMedica);
            });
        })
        .put(function(request, response) {
            AvaliacaoMedica.findById(request.params.avaliacoes_medicas_id, function(err, avaliacaoMedica) {

                if (err)
                    response.send(err);

                var avaliacaoMedicaData = request.body;
                avaliacaoMedica.data = avaliacaoMedicaData.data;
                avaliacaoMedica.responsavel = avaliacaoMedicaData.responsavel;
                avaliacaoMedica.peso = avaliacaoMedicaData.peso;
                avaliacaoMedica.temperaturaCorporal = avaliacaoMedicaData.temperaturaCorporal;
                avaliacaoMedica.pressao = avaliacaoMedicaData.pressao;
                avaliacaoMedica.batimentosCardiacos = avaliacaoMedicaData.batimentosCardiacos;
                avaliacaoMedica.lesao = avaliacaoMedicaData.lesao;
                
                avaliacaoMedica.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'AvaliacaoMedica atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            AvaliacaoMedica.remove({
                _id: request.params.avaliacoes_medicas_id
            }, function(err, avaliacaoMedica) {
                if (err)
                    response.send(err);

                response.json({ message: 'AvaliacaoMedica excluído com sucesso!' });
            });
        });
}