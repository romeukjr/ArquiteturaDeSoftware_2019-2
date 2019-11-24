var Advogado = require('../../model/Juridico/advogadoModel');

module.exports = function (router) {
    //(http://localhost:8080/api/advogados)
    router.route('/advogados')
        .post(function(request, response) {
            var advogadoData = request.body;
            var advogado = new Advogado();
            advogado.usuario = advogadoData.usuario;
            advogado.carteiraOAB = advogadoData.carteiraOAB;
            
            advogado.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Advogado criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            Advogado.find(function(err, advogados) {
                if (err)
                    response.send(err);

                response.json(advogados);
            });
        });

    // (http://localhost:8080/api/advogados/:advogado_id)
    router.route('/advogados/:advogado_id')
        .get(function(request, response) {
            Advogado.findById(request.params.advogado_id, function(err, advogado) {
                if (err)
                    response.send(err);
                response.json(advogado);
            });
        })
        .put(function(request, response) {
            Advogado.findById(request.params.advogado_id, function(err, advogado) {

                if (err)
                    response.send(err);

                var advogadoData = request.body;
                advogado.usuario = advogadoData.usuario;
                advogado.carteiraOAB = advogadoData.carteiraOAB;
                
                advogado.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Advogado atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            Advogado.remove({
                _id: request.params.advogado_id
            }, function(err, advogado) {
                if (err)
                    response.send(err);

                response.json({ message: 'Advogado excluído com sucesso!' });
            });
        });
}