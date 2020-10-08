Ext.define('MyModernApp.view.layouts.Card',{
    extend: 'Ext.Panel',
    //requires:[
    //    'Ext.form.Panel'
    //],
    alias: 'widget.card_layout',
    title: 'Exemplo Card Layout',

    layout: {
        type: 'card',
        animation: {
            type: 'slide'
        }
    },

    defaults: {
        margin: 5,
        shadow: true
    },

    items:[{
        xtype: 'container',
        layput: 'form',
        html: '<h1>Seja bem vindo ao nosso assistente</h1>'
    },{
        xtype: 'formpanel',
        title: 'Preencha os seus dados',
        items:[{
            xtype: 'textfield',
            placeholder: 'Informe seu nome',
            label: 'Nome'
        },{
            xtype: 'textfield',
            placeholder: 'Informe seu e-mail',
            label: 'E-mail'
        }]
    },{
        xtype: 'container',
        html: '<h1>Parabéns, você chegou ao final.</h1>'
    }],

    bbar:{
        items:[{
            xtype: 'spacer',
            flex: 1
        },{
            xtype: 'button',
            text: 'Anterior',
            handler: function(button){
                var layout = button.up('card_layout').getLayout();
                layout.previous();
            }
        },{
            xtype: 'button',
            text: 'Próximo',
            handler: function(button){
                var layout = button.up('card_layout').getLayout();
                layout.next();
            }
        }]
    }
})