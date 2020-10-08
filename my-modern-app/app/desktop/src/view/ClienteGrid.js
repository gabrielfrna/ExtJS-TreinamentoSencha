Ext.define('MyModernApp.view.ClienteGrid',{
    extend: 'Ext.grid.Grid',
    alias: 'widget.grid_example',
    title: 'Listagem de Clientes',

    store: {
        type: 'clientes',
        autoLoad: true
    },

    columns:[{
        text: 'ID',
        width: 60,
        dataIndex: 'id'
    },{
        text: 'Nome',
        flex: 1,
        dataIndex: 'nome'
    },{
        text: 'Sobrenome',
        flex: 1,
        dataIndex: 'sobrenome'
    },{
        text: 'Email',
        flex: 1,
        dataIndex: 'email'
    }]
})