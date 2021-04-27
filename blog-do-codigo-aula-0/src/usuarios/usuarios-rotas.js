const usuariosControlador = require('./usuarios-controlador');

module.exports = app => {
    app
    .route('/usuario/login')
    .post(usuariosControlador.login)

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id').delete(usuariosControlador.deleta);
};
