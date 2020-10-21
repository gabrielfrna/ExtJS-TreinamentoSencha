Ext.define('MyModernApp.view.componentes.Main',{
    extend: 'Ext.Container',
    alias: 'widget.component_examples',
    controller: 'component-main',
    bodyPadding: 20,

    items: [{
        xtype: 'button',
        text: 'Dialog',
        handler: 'onOpenDialog'
    },{
        xtype: 'button',
        text: 'Form e Fields',
        handler: 'onOpenFormFields'
    },{
        xtype: 'button',
        text: 'Grid',
        handler: 'onOpenGrid'
    },{
        xtype: 'button',
        text: 'TabPanel',
        handler: 'onOpenTabPanel'
    }]
})