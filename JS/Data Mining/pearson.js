/* Give two arrays and get a unique value. That is Pearson's coeficient, a value which correspond a value between -1 and 1. 
Higher values (near 1) are correspond a high correlation, near 0 correspond a non-correlation, and near -1 correspond a "inverse"
correlation
*/

function pearson(ar1, ar2){
	function mean(array){
		let nmean = 0;
		for(var i=0; i<array.length;i++)
			nmean += array[i]
		return nmean/array.length
	}
	function dot(ar1,ar2){
		let result = 0
		if(ar1.length!=ar2.length)
			return undefined
		for(var i in ar1)
			result += ar1[i]*ar2[i]
			
		return result
	}
	function pseudo_bsxfun(array, number, operator){
		switch(operator){
			case '+':
				for(var i in array)
					array[i] += number
				break
			case '-':
				for(var i in array)
					array[i] -= number
				break
			case '*':
				for(var i in array)
					array[i] *= number
				break
			case '/':
				for(var i in array)
					array[i] /= number
				break


		}
		return array
	}
	function cov(ar1, ar2){
		let nmean1 = mean(ar1)
		let nmean2 = mean(ar2)
		let cov = []
		
		nmean1 = pseudo_bsxfun(ar1, nmean1, '-')
		nmean2 = pseudo_bsxfun(ar2, nmean2, '-')
		
		return dot(nmean1, nmean2)/(ar1.length-1)
	}
	
	function variance(array){
		let nmean = mean(array)
		let result = 0
		
		for(var i in array){
			result += Math.pow(array[i]-nmean, 2)
		}
		return result/(array.length-1)
	}
	
	return cov(ar1, ar2)/Math.sqrt( variance(ar1)*variance(ar2) )
}
