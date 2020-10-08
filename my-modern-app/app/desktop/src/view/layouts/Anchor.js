Ext.define('MyModernApp.view.layouts.Anchor',{
    extend: 'Ext.Panel',
    alias: 'widget.anchor_layout',
    title: 'Anchor Layout',
    defaults:{
        margin: 10,
        shadow: true,
        border: 1
    },
    
    items:[{
        xtype: 'panel',
        title: 'Panel 1 - 90% width 50% height',
        width: '90%',
        height: '50%'
    },{
        xtype: 'panel',
        title: 'Panel 2 - 75% width 15% height',
        width: '75%',
        height: '15%'
    },{
        xtype: 'panel',
        title: 'Panel 3 - 35% wdith',
        width: '35%',
        height: 100
    }]
    
})