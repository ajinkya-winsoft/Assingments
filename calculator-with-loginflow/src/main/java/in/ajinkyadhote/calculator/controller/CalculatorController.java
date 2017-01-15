package in.ajinkyadhote.calculator.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
	
	@RequestMapping("/")
	public String a() {
		return "in Calculator";
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
