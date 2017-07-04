self.onmessage=function(event){
	if(event.data == "Hola"){
		  self.postMessage("¡Qué educado!");	
	}
	else if(event.data == "Adios"){
		  self.postMessage("¡Qué rápido te vas!");	
	}
	else if(event.data == "Buenos dias"){
		  self.postMessage("Muy buenos dias, encantado");	
	}
	else if(event.data == "Buenas noches"){
		  self.postMessage("Vete a dormir, pesado");	
	}
	else{
		  self.postMessage("¡Maleducado!");	
	}
	
};