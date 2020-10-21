Ext.define('MyModernApp.view.componentes.Toolbar',{
    extend: 'Ext.Toolbar',
    alias: 'widget.mytoolbar',

    items:[{
        xtype: 'button',
        text: 'Novo',
        iconCls: 'x-fa fa-plus'
    },{
        xtype: 'button',
        text: 'Editar',
        iconCls: 'x-fa fa-edit'
    },{
        xtype: 'spacer',
        flex: 1
    },{
        xtype: 'button',
        text: 'Exportar',
        iconCls: 'x-fa fa-download',
        iconAlign: 'top',
        menu: {
            items:[{
                text: 'Excel',
                iconCls: 'x-fa fa-file-excel'
            },{
                text: 'PDF',
                iconCls: 'x-fa fa-file-pdf'
            }]
        }
    },{
        xtype: 'button',
        iconCls: 'x-fa fa-bell',
        badgeText: 9
    }]
})