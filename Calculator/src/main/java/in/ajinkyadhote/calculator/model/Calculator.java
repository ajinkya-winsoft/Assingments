package in.ajinkyadhote.calculator.model;

import org.springframework.stereotype.Component;

@Component
public class Calculator {
	
	public int add(int a, int b) {
		return (a+b);
	}
	
	public int subtract(int a, int b) {
		return (a-b);
	}
	
	public int multiply(int a,int b) {
		return (a*b);
	}
	
	public String divide(int a, int b) throws CalculatorException {
		String result = null;
		if(b==0) {
			throw new CalculatorException("Divide By Zero Not Permited");
		}else {
			result =  Integer.toString(a/b);
		}
		return result;
	}

}
