Ext.define('MyModernApp.view.componentes.Grid',{
    extend: 'Ext.grid.Grid',
    alias: 'widget.mygrid',
    controller: 'mygridcontroller',
    viewModel: {
        type: 'mygridviewmodel'
    },
    //title: 'My Grid Example',
    //store: {
    //    type: 'clientes',
    //    pageSize: 25,
    //    autoLoad: true
    //},

    bind: {
        store: '{clientes}',
        title: '{textoTeste} - X = {x} Y= {y} - A soma é {soma} - DobroX = {dobroX} - QuadruploX = {quadruploX}'
    },

    columns:[{
        text: 'ID',
        width: 50,
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
        xtype: 'booleancolumn',
        text: 'Ativo',
        trueText: 'Ativo',
        falseText: 'Inativo',
        width: 60,
        dataIndex: 'ativo'
    },{
        text: 'Renda',
        width: 90,
        dataIndex: 'renda',
        hidden: true
    },{
        text: 'Sexo',
        width: 100,
        dataIndex: 'sexo'
    },{
        xtype: 'datecolumn',
        format:'d/m/Y',
        text: 'Nascimento',
        width: 100,
        dataIndex: 'data_nascimento'
    },{
        text: 'Criação',
        width: 120,
        dataIndex: 'created_at',
        hidden: true
    }],

    items:[{
        xtype: 'mytoolbar',
        docked: 'top'
    }]
})