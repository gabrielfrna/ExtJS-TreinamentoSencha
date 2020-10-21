Ext.define('MyModernApp.view.componentes.Panel',{
    extend: 'Ext.Panel',
    alias: 'widget.mypanel',
    title: 'Exemplo de Panel',
    tools: [{
        iconCls: 'x-fa fa-user'
    },{
        iconCls: 'x-fa fa-cube'
    }],

    items: [{
        xtype: 'textfield',
        label: 'My label'
    },{
        xtype: 'toolbar',
        docked: 'bottom',
        items: [{
            xtype: 'button',
            text: 'Salvar'
        }]
    }]
})