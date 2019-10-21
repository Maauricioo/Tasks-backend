module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/tasks')
        .all(app.congig.passport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.taks.save)

    app.route('/tasks/:id')
        .all(app.congig.passport.authenticate())
        .delete(app.api.task.remove)

    app.route('/tasks/:id/toggle')
        .all(app.congig.passport.authenticate())
        .put(app.api.task.toggleTask)
}