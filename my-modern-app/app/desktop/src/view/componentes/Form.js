Ext.define('MyModernApp.componentes.view.Form',{
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',
    bodyPadding: 10,
    border: 1,
    shadow: true,
    title: 'My Form',

    items: [{
        xtype: 'textfield',
        label: 'My Text Field',
        required: true,
        placeholder: 'Informe um texto'
    },{
        xtype: 'textareafield',
        label: 'My Text Area',
        height: 120,
        labelAlign: 'left'
    },{
        xtype: 'datefield',
        label: 'My Date',
        minDate: new Date()
    },{
        xtype: 'timefield',
        label: 'My Time'
    },{
        xtype: 'numberfield',
        label: 'My Number Field'
    },{
        xtype: 'combobox',
        label: 'Estados',
        queryMode: 'local',
        valueField: 'description',
        displayField: 'description',
        picker: 'edge',
        store: {
            fields: ['description'],
            data: [
                {description: 'Goias'},
                {description: 'Paraná'},
                {description: 'São Paulo'},
                {description: 'Rio de Janeiro'},
                {description: 'Tocantins'},
                {description: 'Minas Gerais'}
            ]
        }
    },{
        xtype: 'combobox',
        label: 'My Remote Combobox',
        queryMode: 'local',
        valueField: 'id',
        displayField: 'nome',
        store: {
            type: 'clientes'
        }
    },{
        xtype: 'checkbox',
        label: 'My Checkbox'
    }]
});