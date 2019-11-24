var Ouvidoria = require('../../model/Ouvidoria/ouvidoriaModel');

module.exports = function (router) {
    //(http://localhost:8080/api/ouvidorias)
    router.route('/ouvidorias')
        .post(function(request, response) {
            var ouvidoriaData = request.body;
            var ouvidoria = new Ouvidoria();
            ouvidoria.descricao = ouvidoriaData.descricao;
            ouvidoria.prioridade = ouvidoriaData.prioridade;
            ouvidoria.tipo = ouvidoriaData.tipo;
            ouvidoria.localizacao = ouvidoriaData.localizacao;
            ouvidoria.anonimato = ouvidoriaData.anonimato;

            if (ouvidoriaData.usuario) {
                ouvidoria.usuario = ouvidoriaData.usuario;
            }
            
            ouvidoria.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Ouvidoria criado com sucesso!' });
            });            
        })
        .get(function(request, response) {
            Ouvidoria.find(function(err, ouvidorias) {
                if (err)
                    response.send(err);

                response.json(ouvidorias);
            });
        });

    // (http://localhost:8080/api/ouvidorias/:ouvidoria_id)
    router.route('/ouvidorias/:ouvidoria_id')
        .get(function(request, response) {
            Ouvidoria.findById(request.params.ouvidoria_id, function(err, ouvidoria) {
                if (err)
                    response.send(err);
                response.json(ouvidoria);
            });
        })
        .put(function(request, response) {
            Ouvidoria.findById(request.params.ouvidoria_id, function(err, ouvidoria) {

                if (err)
                    response.send(err);

                var ouvidoriaData = request.body;
                ouvidoria.descricao = ouvidoriaData.descricao;
                ouvidoria.prioridade = ouvidoriaData.prioridade;
                ouvidoria.tipo = ouvidoriaData.tipo;
                ouvidoria.localizacao = ouvidoriaData.localizacao;
                ouvidoria.anonimato = ouvidoriaData.anonimato;
                
                if (ouvidoriaData.usuario) {
                    ouvidoria.usuario = ouvidoriaData.usuario;
                }
                
                ouvidoria.save(function(err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'Ouvidoria atualizado com sucesso!' });
                });

            });
        })
        .delete(function(request, response) {
            Ouvidoria.remove({
                _id: request.params.ouvidoria_id
            }, function(err, ouvidoria) {
                if (err)
                    response.send(err);

                response.json({ message: 'Ouvidoria excluído com sucesso!' });
            });
        });
}