var oPage = {
    onInit:function(){
        
    },
    conectar:function(){
        var socket = new SockJS('http://172.17.1.230:8106/continuo');
	            console.log(socket);
	            stompClient = Stomp.over(socket); 
	            stompClient.connect({}, function(frame) {
	            	setConnected(true);
	                console.log('Connectedo: ' + frame);
	                stompClient.subscribe('/topic/continuo', function(messageOutput) {
	                    showMessageOutput(JSON.parse(messageOutput.body));
	                });
	            });
    },
}