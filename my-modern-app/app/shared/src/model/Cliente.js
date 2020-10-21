Ext.define('MyModernApp.model.Cliente',{
    extend: 'Ext.data.Model',
    requires: [
        //'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Rest'
    ],
    /*
    proxy: {
        type: 'localstorage',
        id: 'clientes'
    },
    */
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/clientes',
        writer: {
            type: 'json'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    idProperty: 'id',
    fields:[{
        name: 'id',
        type: 'int'
    },{
        name: 'nome',
        type: 'string'
    },{
        name: 'sobrenome',
        type: 'string' 
    },{
        name: 'nome_completo',
        convert: function(value, record){
            return record.get('nome') + ' ' + record.get('sobrenome');
        }
    },{
        name: 'email',
        type: 'string'
    },{
        name: 'data_nascimento',
        type: 'date',
        dateFormat: 'Y-m-d'
    },{
        name: 'ativo',
        type: 'boolean',
        defaultValue: true
    },{
        name: 'renda',
        type: 'float',
        allowNull: true
    }, {
        name: 'sexo',
        type: 'string',
        validators: [{
            type: 'presence'
        }, {
            type: 'inclusion',
            list: ['Masculino', 'Feminino']
        }]

    },{
        name: 'created_at',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    },{
        name: 'observacao',
        type: 'string'
    }]
});