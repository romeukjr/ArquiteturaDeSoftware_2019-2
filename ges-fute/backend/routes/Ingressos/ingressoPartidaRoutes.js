var IngressoPartida = require('../../model/Ingressos/ingressoPartidaModel');

module.exports = function (router) {
    //(http://localhost:8080/api/ingressos)
    router.route('/ingressos')
        .post(function(request, response) {
            var ingressoData = request.body;
            var ingresso = new IngressoPartida();
            ingresso.cadeira = ingressoData.cadeira;
            ingresso.partida = ingressoData.partida;
            ingresso.usuario = ingressoData.usuario;

            ingresso.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Ingresso criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            IngressoPartida.find(function(err, ingressos) {
                if (err)
                    response.send(err);

                response.json(ingressos);
            });
        });

    // (http://localhost:8080/api/ingressos/:ingresso_id)
    router.route('/ingressos/:ingresso_id')
        .get(function(request, response) {
            IngressoPartida.findById(request.params.ingresso_id, function(err, ingresso) {
                if (err)
                    response.send(err);
                response.json(ingresso);
            });
        })
        .put(function(request, response) {
            IngressoPartida.findById(request.params.ingresso_id, function(err, ingresso) {

                if (err)
                    response.send(err);

                var ingressoData = request.body;
                ingresso.cadeira = ingressoData.cadeira;
                ingresso.partida = ingressoData.partida;
                ingresso.usuario = ingressoData.usuario;
                
                ingresso.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Ingresso atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            IngressoPartida.remove({
                _id: request.params.ingresso_id
            }, function(err, ingresso) {
                if (err)
                    response.send(err);

                response.json({ message: 'Ingresso excluído com sucesso!' });
            });
        });
}