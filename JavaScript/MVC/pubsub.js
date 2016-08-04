/**
 * pubsub.js
 * 이벤트를 구독하는 독자에게 이벤트를 전달,추가,삭제등의 요청을 처리함.
 */

function EventBroker(){
	
}
/*필요한 만큼 객체를 생성해서 사용하기 위해 생성자 함수의 용도이다.
모든 EventBroker는 자신에게 필요한 메세지를 구독(subscribe),
필요한 메세지를 발생(publish),구독을 중지(unSubscribe)할 수 있도록 설계한다.
*/

EventBroker.prototype.subscribe=
function(element, eventType, callback){
	this.subscribers= this.subscribers|| []; 
	/*메세지가 들어오면 수신자들에게 메세지를 전달해야하니까, 그때 필요한 수신자의 목록을 배열로 정의했다.*/
	this.subscribers.push({"eventType":eventType,
	"element":element});
	element.addEventListener(eventType, callback, false);
};

EventBroker.prototype.publish=function(eventType,data){
	for(var i=0, len=this.subscribers.length; i<len; i++){
		/*바로 윗줄은 메세지가 발행되었을 때, 메세지를 구독하는 대상을 찾아낸다.*/
		if(this.subscribers[i].eventType===eventType){
			var evt= new CustomEvent(eventType, {detail:data});
			this.subscribers[i].element.dispatchEvent(evt);
			/*찾아낸 구독자들에게 dispatchEvent로 이벤트를 전달한다.*/
		}
	}
};

EventBroker.prototype.unSubscribe=function(eventType, element){
	/*이벤트 수신을 끊겠다면, 구독자 목록에서 제외시켜준다.*/
	for(var i=0, len=this.subscribers.length; i<len ; i++){
		if(this.subscribers[i].eventType===
			eventType&& this.subscribers[i].element===element){
				this.subscribers.splice(i,1);
			}
	}
};
