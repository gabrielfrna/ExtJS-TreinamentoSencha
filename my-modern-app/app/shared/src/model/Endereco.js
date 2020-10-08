Ext.define('MyModernApp.model.Endereco', {
    extend: 'MyModernApp.model.Base',
    idProperty: 'id',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        //FOREIGN KEY
        name: 'cliente_id',
        reference: {
            type: 'Cliente',
            role: 'customer',
            inverse: {
                model: 'MyModernApp.model.Endereco',
                role: 'addresses'
            }
        },
        validators: [{
            type: 'presence'
        }],
        type: 'int'
    }, {
        name: 'logradouro',
        validators: [{
            type: 'presence'
        }],
        type: 'string'
    }, {
        name: 'numero',
        type: 'string'
    }, {
        name: 'bairro',
        type: 'string'
    }, {
        name: 'cidade',
        type: 'string'
    }, {
        name: 'estado',
        type: 'string'
    }]
});