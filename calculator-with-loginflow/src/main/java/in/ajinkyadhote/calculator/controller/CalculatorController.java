package in.ajinkyadhote.calculator.controller;

import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ajinkyadhote.calculator.model.Calculator;
import in.ajinkyadhote.calculator.model.CalculatorException;

@RestController
@RequestMapping("/calculator")
public class CalculatorController  {
	
	@Autowired
	private Calculator calculator;
	private static final Logger logger = LoggerFactory.getLogger(Calculator.class);
	
	public CalculatorController() {
		
	}
	
	@RequestMapping("/eval/{expression}")
	public String eval(@PathVariable String expression) {
		String result = null;
		try {
			result = calculator.eval(expression);
		} catch (ScriptException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = e.getMessage();		}
		return result;
	}
	@RequestMapping("/divide")
	public String calculator() {
		logger.debug("In Calculator");
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
