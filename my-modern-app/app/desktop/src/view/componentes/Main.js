Ext.define('MyModernApp.view.componentes.Main',{
    extend: 'Ext.Container',
    alias: 'widget.component_examples',
    controller: 'component-main',
    bodyPadding: 20,
    responsiveConfig: {
        //'desktop': {
        //    layout: 'hbox'
        //},
        'desktop && width > 800': {
            layout: {
                type: 'hbox',
                align: 'middle'
            }
        },
        'desktop && width < 800': {
            layout: 'vbox'
        },
        'phone': {
            layout: 'vbox'
        },
        'tablet && landscape': {
            layout: {
                type: 'hbox',
                align: 'middle'
            }
        },
        'tablet && portrait': {
            layout: {
                type: 'vbox',
                align: 'middle'
            }
        }
    },

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