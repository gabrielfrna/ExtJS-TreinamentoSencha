Ext.define('MyModernApp.store.Clientes',{
    extend: 'Ext.data.Store',
    alias: 'store.clientes',
    model: 'MyModernApp.model.Cliente',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/clientes',
        writer: {
            type: 'json'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
})