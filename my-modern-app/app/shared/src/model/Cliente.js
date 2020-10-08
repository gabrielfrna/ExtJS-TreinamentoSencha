Ext.define('MyModernApp.model.Cliente',{
    extend: 'Ext.data.Model',
    proxy: {
        type: 'localstorage',
        id: 'clientes'
    },
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
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