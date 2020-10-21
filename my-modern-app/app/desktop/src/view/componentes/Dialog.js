Ext.define('MyModernApp.view.componentes.Dialog',{
    extend: 'MyModernApp.view.componentes.AbstractDialog',
    title: 'Exemplo de Dialog',
    layout: 'fit',
    items: {
        panel: {
            xtype: 'mypanel'
            //xclass: 'MyModernApp.view.componentes.Panel'
        }
    }
});