Ext.define('MyModernApp.view.layouts.HBox',{
    extend: 'Ext.Panel',
    alias: 'widget.hbox_layout',
    title: 'Exemplo HBox Layout',

    layout: {
        type: 'hbox',
        pack: 'space-around',
        align: 'stretch'
    },

    defaults: {
        margin: 5,
        shadow: true,
        border: 1
    },

    items:[{
        xtype: 'panel',
        title: 'Panel 1',
        //flex: 3,
        width: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 2',
        height: 300,
        //flex: 1,
        width: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 3',
        height: 300,
        //flex: 2,
        width: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 4',
        //flex: 2,
        width: 200,
        html: 'Content here'
    }]
})