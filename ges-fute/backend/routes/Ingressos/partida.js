var Partida = require('../../model/Partida/partidaModel');

module.exports = function (router) {
    //(http://localhost:8080/api/partidas)
    router.route('/partidas')
        .post(function(request, response) {
            var partidaData = request.body;
            var partida = new Partida();
            partida.adversario = partidaData.adversario;
            partida.campeonato = partidaData.campeonato;
            partida.data = partidaData.data;
            
            partida.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Partida criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            Partida.find(function(err, partidas) {
                if (err)
                    response.send(err);

                response.json(partidas);
            });
        });

    // (http://localhost:8080/api/partidas/:partida_id)
    router.route('/partidas/:partida_id')
        .get(function(request, response) {
            Partida.findById(request.params.partida_id, function(err, partida) {
                if (err)
                    response.send(err);
                response.json(partida);
            });
        })
        .put(function(request, response) {
            Partida.findById(request.params.partida_id, function(err, partida) {

                if (err)
                    response.send(err);

                var partidaData = request.body;
                partida.adversario = partidaData.adversario;
                partida.campeonato = partidaData.campeonato;
                partida.data = partidaData.data;
                
                partida.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Partida atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            Partida.remove({
                _id: request.params.partida_id
            }, function(err, partida) {
                if (err)
                    response.send(err);

                response.json({ message: 'Partida excluído com sucesso!' });
            });
        });
}