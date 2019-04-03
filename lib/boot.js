module.exports = app => {
    app.listen(app.get("port"), ()=> {
        console.log("API Teste está na porta "+ app.get("port"))
    })
}