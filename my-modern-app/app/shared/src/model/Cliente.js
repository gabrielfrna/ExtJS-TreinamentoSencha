Ext.define('MyModernApp.model.Cliente',{
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.LocalStorage',
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
        type: 'date'
    },{
        name: 'ativo',
        type: 'boolean',
        defaultValue: true
    },{
        name: 'peso',
        type: 'float',
        allowNull: true
    }]
});