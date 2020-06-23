import req from "./req";


export default {
    // 查询价格维护列表信息
    queryPriceMaintainListInfo:(data)=>req({
        baseUrl:'wood',
        url:'priceMaintain/queryList',
        method:'get',
        params:data,
        isOriginalGET:true
    }),
    // 新增价格维护信息
    insertPriceMaitainInfo:(data)=>req({
        baseUrl:'wood',
        url:'priceMaintain/addData',
        method:'post',
        params:data,
    }),
    // 编辑价格维护信息
    updatePriceMaintainInfo:(data)=>req({
        baseUrl:'wood',
        url:'priceMaintain/updateData',
        method:'put',
        params:data,
    }),
    // 删除价格维护信息
    deletePriceMaintainInfo:(data)=>req({
        baseUrl:'wood',
        url:'priceMaintain/deleteData',
        method:'delete',
        params:data
    })
}