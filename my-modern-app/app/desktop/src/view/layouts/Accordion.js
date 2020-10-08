Ext.define('MyModernApp.view.layouts.Accordion',{
    extend: 'Ext.panel.Accordion',
    alias: 'widget.accordion_layout',
    title: 'Exemplo Accordion Layout',

    openable: 2,

    defaults:{
        border: 1,
        shadow: true,
        margin: 5
    },

    items:[{
        xtype: 'panel',
        title: 'Panel 1',
        html: 'Texto aqui'
    },{
        xtype: 'panel',
        title: 'Panel 2',
        html: 'Texto aqui'
    },{
        xtype: 'panel',
        title: 'Panel 3',
        html: 'Texto aqui'
    }]
})