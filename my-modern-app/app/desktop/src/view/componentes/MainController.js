Ext.define('MyModernApp.view.componentes.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.component-main',

    onOpenDialog: function(){
        Ext.create('MyModernApp.view.componentes.Dialog').show();
    },

    onOpenFormFields: function(){
        Ext.create('MyModernApp.view.componentes.AbstractDialog',{
            layout: 'fit',
            title: 'Exemplo de Form e Fields',
            maximized: true,
            items:{
                meuform: {
                    xtype: 'myform'
                }
            }
        }).show();
    },

    onOpenGrid: function(){
        Ext.create('MyModernApp.view.componentes.AbstractDialog',{
            layout: 'fit',
            title: 'Exemplo de Grid Panel',
            maximized: true,
            ui: 'dark-dialog',
            items:{
                mygrid: {
                    xtype: 'mygrid'
                }
            }
        }).show();
    },

    onOpenTabPanel: function(){
        Ext.create('MyModernApp.view.componentes.AbstractDialog',{
            layout: 'fit',
            title: 'Exemplo de TabPanel',
            maximized: true,
            items:{
                mygrid: {
                    xtype: 'mytabpanel'
                }
            }
        }).show();
    }
})