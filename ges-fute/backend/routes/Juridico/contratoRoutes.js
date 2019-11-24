var Contrato = require('../../model/Juridico/contratoModel');

module.exports = function (router) {
    //(http://localhost:8080/api/contratos)
    router.route('/contratos')
        .post(function(request, response) {
            var contratoData = request.body;
            var contrato = new Contrato();
            contrato.informacoesLegais = contratoData.informacoesLegais;
            contrato.numeroDocumento = contratoData.numeroDocumento;
            contrato.numeroLei = contratoData.numeroLei;
            contrato.taxa = contratoData.taxa;
            contrato.compromisso = contratoData.compromisso;
            contrato.data = contratoData.data;

            if (contratoData.atleta) {
                contrato.atleta = contratoData.atleta;
            }

            if (contratoData.advogado) {
                contrato.advogado = contratoData.advogado;
            }
            
            contrato.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Contrato criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            Contrato.find(function(err, contratos) {
                if (err)
                    response.send(err);

                response.json(contratos);
            });
        });

    // (http://localhost:8080/api/contratos/:contrato_id)
    router.route('/contratos/:contrato_id')
        .get(function(request, response) {
            Contrato.findById(request.params.contrato_id, function(err, contrato) {
                if (err)
                    response.send(err);
                response.json(contrato);
            });
        })
        .put(function(request, response) {
            Contrato.findById(request.params.contrato_id, function(err, contrato) {

                if (err)
                    response.send(err);

                var contratoData = request.body;
                contrato.informacoesLegais = contratoData.informacoesLegais;
                contrato.numeroDocumento = contratoData.numeroDocumento;
                contrato.numeroLei = contratoData.numeroLei;
                contrato.taxa = contratoData.taxa;
                contrato.compromisso = contratoData.compromisso;
                contrato.data = contratoData.data;

                if (contratoData.atleta) {
                    contrato.atleta = contratoData.atleta;
                }

                if (contratoData.advogado) {
                    contrato.advogado = contratoData.advogado;
                }
                
                contrato.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Contrato atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            Contrato.remove({
                _id: request.params.contrato_id
            }, function(err, contrato) {
                if (err)
                    response.send(err);

                response.json({ message: 'Contrato excluído com sucesso!' });
            });
        });
}