Ext.define('MyModernApp.view.componentes.Toolbar',{
    extend: 'Ext.Toolbar',
    alias: 'widget.mytoolbar',

    items:[{
        xtype: 'button',
        text: 'Novo',
        ui: 'action',
        reference: 'btnNovo',
        iconCls: 'x-fa fa-plus',
        listeners: {
            tap: 'onNovoButtonTap'
        }
    },{
        xtype: 'button',
        text: 'Editar',
        ui: 'round warn',
        iconCls: 'x-fa fa-edit'
    },{
        xtype: 'button',
        text: 'Remover',
        ui: 'danger',
        iconCls: 'x-fa fa-trash',
        listeners: {
            tap: 'onRemoverButtonTap'
        }
    },{
        xtype: 'numberfield',
        label: 'X',
        bind: {
            value: '{x}'
        }
    },{
        xtype: 'numberfield',
        label: 'Y',
        bind: {
            value: '{y}'
        }
    },{
        xtype: 'textfield',
        label: 'Título',
        bind: {
            value: '{textoTeste}'
        }
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
        handler: 'onNotification',
        bind: {
            badgeText: '{notificacoes}'
        }
    }]
})