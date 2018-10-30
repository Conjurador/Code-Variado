/*class State{
	constructor(name, func){
		this.name = name;
		this.func = func;
	}
}
class Goal{
	constructor(name, func){
		this.name = name;
		this.func = func;
	}
}*/
function search(vet, value){
	for(var i in vet)
		if(i==value)
			return true;
	return false;
}
var State = function(name, func){
	this.name = name;
	this.func = func;
}

var Goal = function(name, func){
	this.name = name;
	this.func = func;
}

var operators = {}, methods = {};

function declare_operators(){
	for(var i in arguments)
		operators[arguments[i].name] = arguments[i];
}

function declare_methods(task_name){
	methods[task_name] = [];
	for(var i=1; i<arguments.length; i++)
		methods[task_name].push(arguments[i]);
}

function print_operators(){
	console.log("OPERATORS: "+Object.keys(operators));
}

function clone(state, depth=1, maxDepth=4){
	var newstate = {};
	for(var i in state)
		if(typeof(state[i])=="object" && depth<maxDepth)
			newstate[i] = clone(state[i], depth++, maxDepth);
		else
			newstate[i] = state[i];
	return newstate;	
}

var t1, t2, novost
function seek_plan(state, tasks, plan, depth, verbose=0){
	if(verbose>1) console.log('depth '+depth+', tasks: '+tasks);
	if(tasks.length==0){
		if(verbose>2) console.log('depth '+depth+', tasks: '+tasks);
		return plan;
	}
	var task = tasks[0];
	t = tasks;
		
	// Operators	
	if(task[0] in operators){
		// if(verbose>2) console.log('depth '+depth+', tasks: '+tasks);
		operator = operators[task[0]];
		var newstate = [], id = 0;		
		// console.log(' ***** '+operator.name)
		newstate = operator(clone(state), task.slice(1,task.length));
		// showstate(state)
		
		if(newstate){
			var solution = seek_plan(newstate, tasks.slice(1,tasks.length), plan.concat([task]),depth+1,verbose);
			if(solution!=false){
				return solution;
			}
		}
	}
	// Methods
	if(task[0] in methods){
		var relevant = methods[task[0]];
		for(var i=0, method=relevant[0];i < relevant.length; method = relevant[++i]){
			subtasks = method(state,task.slice(1,task.length));
			if(subtasks!=false){
				var solution = seek_plan(state, subtasks.concat(tasks.slice(1,tasks.length)),plan,depth+1,verbose);
				if(solution!=false)
					return solution;
			}
		}
	}
	return false;
}

/* ----------------------------------
----------- Caso de estudo ----------
---------------------------------- */
function showstate(state, depth=1, name){
	// console.log("\n - "+state.name)
	for(var i in state)
		var txt = "";
			for(var j=0; j<depth*2+3;j++)
				txt += " ";
		console.log(txt+" __ "+i);
		if(typeof(state[i])=="object"){
			showstate(state[i],depth+1)
		}else{
			
			console.log(txt+"-- "+i+": "+state[i])
		}
			
}

function taxi_rate(dist){
	return 1.5+0.5+dist;
}

function walk(state, [a, x, y]){
	if(state.loc[a]==x){
		state.loc[a] = y;
		return state;
	}
	return false;
}

function call_taxi(state,[a,x]){
	state.loc['taxi'] = x;
	return state;
}

function ride_taxi(state,[a,x,y]){
	if(state.loc['taxi']==x && state.loc[a]==x){
		state.loc['taxi'] = y;
		state.loc[a] = y;
		state.owe[a] = taxi_rate(state.dist[x][y]);
		return state
	}
	return false;
}

function pay_driver(state, a){
	if(state.cash[a] >= state.owe[a]){
		state.cash[a] = state.cash[a] - state.owe[a];
		state.owe[a] = 0;
		return state;
	}
	return false;
}

// METHODS

function travel_by_foot(state, [a, x, y]){
	// console.log('state.dist[x][y]<=2: '+(state.dist[x][y]<=2))
	if(state.dist[x][y]<=2)
		return [['walk',a,x,y]];
	return false;
}

function travel_by_taxi(state, [a, x, y]){        
	if(state.cash[a] >= taxi_rate(state.dist[x][y]))
		return [['call_taxi',a,x], ['ride_taxi',a,x,y], ['pay_driver',a]];
	return false;
}

declare_operators(walk, call_taxi, ride_taxi, pay_driver);
declare_methods('travel',travel_by_foot,travel_by_taxi);

var state1 = new State('state1');
state1.loc = {'me':'home'}
state1.cash = {'me':20}
state1.owe = {'me':0}
state1.dist = {'home':{'park':8}, 'park':{'home':8}}

tasks = [['travel','me','home','park']]
var result = seek_plan(state1, tasks, [], 0);

// https://pt.sharelatex.com/project/5a65e3748fc253413002260f
// https://ocs.aaai.org/Papers/AIIDE/2008/AIIDE08-010.pdf