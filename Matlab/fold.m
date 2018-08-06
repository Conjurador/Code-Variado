%
%	Desmatriciação
%
function tensor = fold(varargin)
	matriz = varargin{1};
	x = varargin{3};
	y = varargin{2};
	z = varargin{4};
	dim = [y x z];
	modo_n = varargin{5};
	
	if modo_n == 1
		tensor = reshape(matriz,y,x,z);
	elseif modo_n == 2
		tensor = reshape(matriz,y,x,z);
		for i = 1:z
			tensor(:,:,i) = tensor(:,:,i)'; 
		end
	elseif modo_n == 3
		for p = 1:x
			for l = 1:z
				for c = 1:y
					tensor(c,l,p) = matriz(l,c+(p-1)*x);
				end
			end
		end
	end
end