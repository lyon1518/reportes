const jsonServe = require("json-server")
const serve = jsonServe.create()
const middleWares = jsonServe.defaults()

serve.use(middleWares)
serve.use(jsonServe.bodyParser)
serve.use((req, res, next)=>{
    if(req.method == "Post"){
        req.body.createdAt = Date.now()
    }
    next()
} )
serve.get("/SA", (req, res)=>{
    res.jsonp({area:"SA",permiso:0})
})
serve.get("/lof", (req, res)=>{
    res.jsonp({area:"lofton",permiso:1})
})
serve.get("/cai", (req, res)=>{
    res.jsonp({area:"cai",permiso:1})
})
serve.get("/rio", (req, res)=>{
    res.jsonp({area:"rio",permiso:2})
})
serve.get("/rancho", (req, res)=>{
    res.jsonp({area:"rancho",permiso:1})
})
serve.get("/dabesare", (req, res)=>{
    res.jsonp({area:"dabesare",permiso:1})
})
serve.get("/vaal", (req, res)=>{
    res.jsonp({area:"vaal",permiso:1})
})
serve.get("/EEfectivo", (req, res)=>{
    res.jsonp({folio:"EE01",fecha:"21/02/2019",mensajero:'Paco Timulo',area:'consultoria',noEntrega:'22',
    cliente:'prueba cliente',domicilio:'domicilio de prueba',NQRecibe:'Jose',monto:'5000',cantidad:'5000',
    cantidadL:'cinco mil',gerente:'Héctor', recibe:'Paco Timulo',formatoArea:'SERVICIOS ADMINISTRATIVOS',tipo:'efectivo' })
})
serve.get("/ECheque", (req, res)=>{
    res.jsonp({folio:"EE01",fecha:"21/02/2019",mensajero:'Paco Timulo',area:'consultoria',noEntrega:'22',
    cliente:'prueba cliente',domicilio:'domicilio de prueba',NQRecibe:'Jose',monto:'5000',cantidad:'5000',
    cantidadL:'cinco mil',gerente:'Héctor', recibe:'Paco Timulo',noCheque:'01',banco:'Banorte (inbursa)',formatoArea:'SERVICIOS ADMINISTRATIVOS',tipo:'cheque' })
})
serve.get("/clientes", (req, res)=>{
    res.jsonp([
        { nombre:'Héctor Edaurdo Gozalez Luna', domicilio:'domicilio de prueba numero 1'},
        { nombre:'Fernando Ivan Ugalde Flores', domicilio:'domicilio de prueba numero 2'},
        { nombre:'Gerardo Alexis Escorza Ibarra', domicilio:'domicilio de prueba numero 3'}
    ])
})
serve.get("/mensajeros", (req, res)=>{
    res.jsonp([
        { nombre:'Cesar Omar Alcarzar Mendez', area:'area de prueba numero 1', noEmpleado:'1001'},
        { nombre:'Ana Laura Torres', area:'area de prueba numero 2', noEmpleado:'1002'},
        { nombre:'Angel Fernando Hernadez', area:'area de prueba numero 3', noEmpleado:'1003'}]
        )
})
serve.listen(3000, ()=>{
    console.log("el servidor esta corriendo");
})