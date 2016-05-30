
String.prototype.endWith=function(str){ 
	var reg=new RegExp(str+"$"); 
	return reg.test(this); 
} 
/*
 * 配置所有列表操作的url中，非List结尾的method
 */
var list_methods = new Array(
"storageWarning"
);

/*
 * 配置所有需要有关闭提示的作业操作的method 
 */
var list_job_methods = new Array(
"receiveOper",
"inWareHouse",
"outGoods",
"outWareHouse",
"inInventory",
"transferOper"
);