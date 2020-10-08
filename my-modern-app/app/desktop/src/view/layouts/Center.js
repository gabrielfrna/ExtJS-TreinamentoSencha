Ext.define('MyModernApp.view.layouts.Center',{
    extend: 'Ext.Panel',
    //requires:[
    //    'Ext.layout.Center'
    //],
    alias: 'widget.center_layout',
    title: 'Exemplo Center Layout',
    layout: 'center',

    items:[{
        xtype: 'panel',
        title: 'Panel 1 centralizado',
        border: 1,
        shadow: true,
        width: '50%',
        height: '50%'
    }]
})