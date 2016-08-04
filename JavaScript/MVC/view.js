/**
 * view.js
 * view의 객체화 한 js파일.
 */

function View(eventBroker, model, view){
	this.broker=eventBroker;
	this.model=model;
	this.view=view;
}

View.prototype.subscribe=function(config){
	this.handleEvent=config.callback;
	if(config.msgType){
		this.broker.subscribe(this.view, config.msgType);
		this.view.addEventListener(config.msgType, 
			this, config.capture?config.capture:false);
	}
	this.view.addEventListener(config.eventType, 
		this, config.capture?config.capture:false);
};
