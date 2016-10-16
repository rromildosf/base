var express = require('express');
var router = express.Router();



// DADOS FAKE PARA TEST
var pacientes = [
    {
        id : "0",
        "nome" : "João F. M.",
        "email" : "user@domain.tld",
        "telefones" : [ "(83) 999123-4567", "(83) 3124-1234" ],
        "endereco" : "rua alguma coisa número tal"

     },
    {
        id : "32",
        "nome" : "Maria Oliveira",
        "email" : "maria@domain.tld",
        "telefones" : [ "(83) 999121-4567", "(83) 3124-1234" ],
        "endereco" : "rua jardim das pedras 15"

     },
    {
        id : "45",
        "nome" : "Caio Marcos",
        "email" : "caio@domain.tld",
        "telefones" : [ "(83) 999123-4267", "(83) 3114-1234" ],
        "endereco" : "rua nestor fernandes 36"

     },
    {
        id : "30",
        "nome" : "José Ferreira M.",
        "email" : "jose@domain.tld",
        "telefones" : [ "(83) 999123-4562", "(83) 3124-1234" ],
        "endereco" : "rua nestor fernandes 19"

     },
    {
        id : "22",
        "nome" : "José Antônio Suares",
        "email" : "josea@domain.tld",
        "telefones" : [ "(83) 99193-4567", "(83) 3124-1234" ],
        "endereco" : "rua alguma coisa número tal"

     },
    { id : "1", "nome" : "Francisco F. M.", "email" : "user@domain.tld" },
    { id : "2", "nome" : "Mario F. M.", "email" : "user@domain.tld" },
    { id : "3", "nome" : "Marcos F. M.", "email" : "user@domain.tld" },
    { id : "4", "nome" : "Carlos F. M.", "email" : "user@domain.tld" },
    { id : "5", "nome" : "Maria F. M.", "email" : "user@domain.tld" },
    { id : "6", "nome" : "Joana F. M.", "email" : "user@domain.tld" },
    { id : "7", "nome" : "Francisca F. M.", "email" : "user@domain.tld" },
    { id : "8", "nome" : "Mariana F. M.", "email" : "user@domain.tld" },
    { id : "9", "nome" : "Carla F. M.", "email" : "user@domain.tld" },
    { id : "10", "nome" : "Joaquina F. M.", "email" : "user@domain.tld" },
    { id : "11", "nome" : "Iana F. M.", "email" : "user@domain.tld" },
    { id : "12", "nome" : "Altair F. M.", "email" : "user@domain.tld" },
    { id : "13", "nome" : "Medeiros F. M.", "email" : "user@domain.tld" },
    { id : "14", "nome" : "Micandes F. M.", "email" : "user@domain.tld" },
    { id : "15", "nome" : "Katarina F. M.", "email" : "user@domain.tld" },
    { id : "16", "nome" : "Katrina F. M.", "email" : "user@domain.tld" },
    { id : "17", "nome" : "Kaique F. M.", "email" : "user@domain.tld" },
    { id : "18", "nome" : "Caio F. M.", "email" : "user@domain.tld" },
    { id : "19", "nome" : "Marta F. M.", "email" : "user@domain.tld" },
    { id : "20", "nome" : "Maia F. M.", "email" : "user@domain.tld" },
    { id : "21", "nome" : "Sintia F. M.", "email" : "user@domain.tld" }
];

// MEDIÇÔES
var med = [
    { id : 0, unit : "bpm", value : 79.86, hora : "09:25:15:004", paciente_id : 1, dispositivo_id : 6 },
    { id : 1,unit : "bpm", value : 76.86, hora : "11:25:15:004", paciente_id : 2, dispositivo_id : 6 },
    { id : 2, unit : "bpm", value : 39.86, hora : "17:25:15:004", paciente_id : 3, dispositivo_id : 6 },
    { id : 3,unit : "bpm", value : 79.45, hora : "02:12:15:004", paciente_id : 5, dispositivo_id : 6 },
    { id : 4,unit : "bpm", value : 89.86, hora : "12:12:15:004", paciente_id : 6, dispositivo_id : 6 },
    { id : 5,unit : "bpm", value : 29.86, hora : "12:25:15:004", paciente_id : 1, dispositivo_id : 6 },
    { id : 6,unit : "bpm", value : 49.86, hora : "12:23:15:004", paciente_id : 1, dispositivo_id : 6 },
    { id : 7,unit : "bpm", value : 69.86, hora : "12:25:15:004", paciente_id : 7, dispositivo_id : 6 },
    { id : 8,unit : "bpm", value : 89.23, hora : "08:54:15:004", paciente_id : 10, dispositivo_id : 6 },
    { id : 9,unit : "bpm", value : 99.35, hora : "07:23:15:004", paciente_id : 15, dispositivo_id : 6 },
    { id : 10,unit : "bpm", value : 19.81, hora : "12:25:15:004", paciente_id : 1, dispositivo_id : 6 },
    { id : 11,unit : "bpm", value : 19.86, hora : "10:25:15:004", paciente_id : 3, dispositivo_id : 6 },
    { id : 12,unit : "bpm", value : 39.86, hora : "12:23:15:004", paciente_id : 20, dispositivo_id : 6 },

    { id : 13,unit : "kg", value : 129.86, hora : "12:25:15:004", paciente_id : 1, dispositivo_id : 1 },
    { id : 14,unit : "kg", value : 149.86, hora : "12:23:15:004", paciente_id : 20, dispositivo_id : 1 },
    { id : 15,unit : "kg", value : 99.86, hora : "12:25:15:004", paciente_id : 7, dispositivo_id : 1 },
    { id : 16,unit : "kg", value : 89.23, hora : "08:54:15:004", paciente_id : 18, dispositivo_id : 1 },
    { id : 17,unit : "kg", value : 99.35, hora : "07:23:15:004", paciente_id : 5, dispositivo_id : 1 },
    {id : 18, unit : "kg", value : 109.81, hora : "12:25:15:004", paciente_id : 9, dispositivo_id : 1 },
    {id : 19, unit : "kg", value : 109.86, hora : "10:25:15:004", paciente_id : 3, dispositivo_id : 1 }
];
/* GET home page. */
// lista simulada de medições
router.get('/measurements', function(req, res) {
    return res.send( med );
} );
router.get('/measurements/:id', function(req, res) {

    var id = req.params.id;
    var meas = [];

    for( var i = 0; i < med.length; i++ ){
        if( med[i].paciente_id == id ){
            meas.push( med[i] );
        }
    }

    return res.json( meas );

});

router.post( '/measurements', function(req, res){
    console.log( req.body );
    
    if( req.body.doError ){
        var err = new Error("Não foi possível gravar");
        err.status = 403;
        return res.send( err );
    }
    return res.json( { status: 200, statusText: "Medição gravada" } );

} );
router.get( '/devices', function( req, res){
    var devices = [
        { type : "HM", name : "HM-348", manufacturer : "Alvas" },
        { type : "YH", name : "HS-148", manufacturer : "Rec" },
        { type : "TG", name : "TH-128", manufacturer : "MAP" },
        { type : "AS", name : "RM8", manufacturer : "TELCO" }
    ];
    return res.send( devices );


} );
router.get( '/patients', function(req, res){
    res.send( pacientes );
} );
router.get( '/patients/:id', function(req, res){
    var id = req.params.id;

    for( var i = 0; i < pacientes.length; i++ ){
        if( pacientes[i].id == id ){
            console.log( pacientes[i].id + "  " + i );
            return res.json( pacientes[i] );
        }
    }
    return res.send( 404 );

} );

module.exports = router;
