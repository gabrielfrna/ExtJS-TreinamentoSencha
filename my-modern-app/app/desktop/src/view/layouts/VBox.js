Ext.define('MyModernApp.view.layouts.VBox',{
    extend: 'Ext.Panel',
    alias: 'widget.vbox_layout',
    title: 'Exemplo VBox Layout',

    layout: {
        type: 'vbox',
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
        height: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 2',
        height: 100,
        //flex: 1,
        //width: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 3',
        height: 100,
        //flex: 2,
        //width: 200,
        html: 'Content here'
    },{
        xtype: 'panel',
        title: 'Panel 4',
        //flex: 2,
        //width: 200,
        html: 'Content here'
    }]
})