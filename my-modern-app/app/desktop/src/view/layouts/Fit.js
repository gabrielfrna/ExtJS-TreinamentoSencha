Ext.define('MyModernApp.view.layouts.Fit',{
    extend: 'Ext.Panel',
    alias: 'widget.fit_layout',
    title: 'Exemplo Fit Layout',

    layout: 'fit',

    defaults: {
        border: 1,
        shadow: true,
        margin: 10
    },

    items:[{
        xtype: 'panel',
        title: 'Panel 1'
    }]
})