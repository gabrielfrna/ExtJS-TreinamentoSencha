Ext.define('MyModernApp.view.componentes.GridViewModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mygridviewmodel',

    data: {
        x: 10,
        y: 5,
        textoTeste: 'Hello!',
        notificacoes: 0
    },

    formulas: {
        soma: function(get) {
            return get('x') + get('y');
        },
        dobroX: function(get){
            return get('x') * 2;
        },
        quadruploX: function(get){
            //return get('x') * 4;
            return get('dobroX') * 2;
        }
    },

    stores: {
        clientes: {
            type: 'clientes',
            pageSize: 25,
            autoLoad: true
        }
    }
})