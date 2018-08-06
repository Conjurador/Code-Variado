/*
	Code read a page of GoogleForms and print questions and answers in console, example:


"
	cont += 1;
	changes[cont] = {};
	cont += 1;
	changes[cont] = {};
	changes[cont]['Feminino'] = 1;
	changes[cont]['Masculino'] = 2;
	changes[cont]['Outro:'] = 3;
	cont += 1;
	
	changes[cont] = {};
	changes[cont]['de 5 a 10 anos'] = 1;
	changes[cont]['de 11 a 15 anos'] = 2;
	changes[cont]['de 16 a 20 anos'] = 3;
	changes[cont]['de 21 a 25 anos'] = 4;
	changes[cont]['de 26 a 30 anos'] = 5;
	changes[cont]['acima de 30 anos'] = 6;
	cont += 1;
"
*/
code_python = "changes = {}; cont = -1;\n"
code_python += "cont += 1;\n"
code_python += "changes[cont] = {};\n";

for(var i=0; i<$(".ss-form-entry").length; i++){
	code_python += "cont += 1;\n";
	code_python += "changes[cont] = {};\n";
	var cont_answer = 0;
	for(var j=0; j<$(".ss-form-entry").eq(i).find(".ss-choice-item").length; j++){
		var answer = $(".ss-form-entry").eq(i).find(".ss-choice-item").eq(j).text();
		answer = answer.replace(/\n/g, "")
		code_python += "changes[cont]['"+answer+"'] = "+(j+1)+";\n";
	}
}

console.log(code_python)
