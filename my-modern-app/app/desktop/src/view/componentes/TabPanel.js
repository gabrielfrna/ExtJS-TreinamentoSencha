Ext.define('MyModernApp.view.componentes.TabPanel',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.mytabpanel',
    tabBarPosition: 'left',
    tabRotation: 'none',

    items:[{
        title: 'Aba 1',
        iconCls: 'x-fa fa-cube',
        html: 'HTML básico aqui',
        disabled: true
    },{
        title: 'Aba 2',
        iconCls: 'x-fa fa-desktop',
        items:[{
            xtype: 'myform'
        }],
        badgeText: 'Beta'
    },{
        title: 'Aba 3',
        closable: true,
        iconCls: 'x-fa fa-bell',
        html: 'HTML',
    },{
        title: 'Clientes',
        iconCls: 'x-fa fa-users',
        xtype: 'mygrid'
    }]
})