Ext.define('MyModernApp.view.layouts.Form',{
    extend: 'Ext.form.Panel',
    alias: 'widget.form_layout',
    title: 'Exemplo Form Layout',

    requires: [
        'Ext.layout.Form',
        'Ext.field.ComboBox'
    ],

    layout: {
        type: 'form'
    },

    defaults: {
        labelAlign: 'left'
    },

    items: [{
        xtype: 'textfield',
        label: 'Nome',
        placeholder: 'Informe seu nome'
    },{
        xtype: 'datefield',
        label: 'Nascimento',
    },{
        xtype: 'combobox',
        label: 'Sexo',
        valueField: 'description',
        displayField: 'description',
        querymode: 'local',
        store: {
            fields: ['description'],
            data: [{
                description: 'Masculino'
            },{
                description: 'Feminino'
            }]
        }
    },{
        xtype: 'textareafield',
        label: 'Text area',
        height: 80
    }]
})