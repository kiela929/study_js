/**
 * dataModel.js 
 * 
 * 새로운 데이터 memo가 들어오면 임의의 id를 발생하고 이를 dataArr이라는 속성에 추가한다.
 * 
 */


var dataModel={
	dataArr:[],
	add: function(memo){
		console.log("add......dataModel: "+memo);
		this.dataArr.push({
			"id": Math.random().toString(36).substr(2,9),
			"memo":memo});
	},
	
	remove: function(id){
		console.log(this.dataArr.length);
		var idx=-1;
		for(var i=0, len=this.dataArr.length; i<len ; i++){
			console.log(this.dataArr[i].id+":"+id);
			if(this.dataArr[i].id=== id){
				idx=i;
				break;
			}
		}
		if(idx>-1){
			this.dataArr.splice(idx,1);
		}
	},
	
	removeByIndex:function(idx){
		this.dataArr.splice(idx,1);
		
	},
	
	findAll:function(){
		return this.dataArr.slice(0);
		
	},
	
	findByIndex: function(idx){
		return this.dataArr[idx];
	}
	
};
