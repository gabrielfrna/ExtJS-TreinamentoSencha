Ext.define('MyModernApp.view.componentes.GridController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.mygridcontroller',

    onNovoButtonTap: function(){
        Ext.create('Ext.Dialog',{
            title: 'Novo Cliente',
            width: 500,
            height: 400,
            closable: true,
            layout: 'form',
            bodyPadding: 15,
            items: [{
                xtype: 'textfield',
                label: 'Nome'
            },{
                xtype: 'textfield',
                label: 'Sobrenome'
            }]
        }).show();
    },

    onRemoverButtonTap: function() {
        var me = this;
        var view = me.getView();
        var selection = view.getSelection();
        var store = view.getStore();
        var buttonNovo = this.lookup('btnNovo');

        Ext.Msg.confirm('Exclusão', 'Deseja realmente excluir?', function(opt){
            if (opt === 'yes') {
                store.remove(selection);
                store.sync({
                    callback: function() {
                        Ext.toast('Excluído com sucesso!');
                        store.reload();
                    }
                });
            }
        });
    },

    onNotification: function() {
        var vm = this.getViewModel();
        var notificacoes = vm.get('notificacoes');
        vm.set('notificacoes', notificacoes + 1);
    }
})