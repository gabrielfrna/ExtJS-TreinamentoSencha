Ext.define('MyModernApp.view.layouts.Absolute',{
    extend: 'Ext.Panel',
    alias: 'widget.absolute_layout',
    title: 'Exemplo Absolute Layout',

    defaults:{
        boder: 1,
        shadow: true,
        height: 100,
        margins: 10
    },

    items:[{
        xtype: 'panel',
        title: 'Panel 1 - right 150 top 100',
        width: '50%',
        //left: 100,
        right: 150,
        top: 100
    },{
        xtype: 'panel',
        title: 'Panel 2 - left 150 top 260',
        left: 150,
        top: 260

    },{
        xtype: 'panel',
        title: 'Panel 3 - left 300 bottom 20',
        left: 300,
        //top: 400
        bottom: 20
    }]
})