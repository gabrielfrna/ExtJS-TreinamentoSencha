Ext.define('MyModernApp.view.ClienteGrid',{
    extend: 'Ext.grid.Grid',
    alias: 'widget.grid_example',
    title: 'Listagem de Clientes',

    store: {
        type: 'clientes',
        autoLoad: true
    },

    listeners: {
        childdoubletap: function(grid, location, eOpts) {
            Ext.Msg.alert('Teste', 'Você clicou duas vezes no cliente ' + location.record.get('nome'));
        },
        columnresize: function(gid, column, width, eOpts) {
            console.log('A nova largura da coluna ' + column.getText() + ' é ' + width);
        }
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