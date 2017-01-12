package in.ajinkyadhote.calculator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ajinkyadhote.calculator.model.Calculator;
import in.ajinkyadhote.calculator.model.CalculatorException;

@RestController
public class CalculatorController  {
	
	@Autowired
	private Calculator calculator;
	
	@RequestMapping("/calculator")
	public String calculator() {
		String result;
		try {
			result = calculator.divide(5, 0);
		} catch (CalculatorException e) {
			result = e.getErrorMessage();
			e.printStackTrace();
		}
		return result;
	}

}
