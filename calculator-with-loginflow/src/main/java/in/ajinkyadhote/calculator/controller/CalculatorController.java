package in.ajinkyadhote.calculator.controller;

import java.util.LinkedHashMap;
import java.util.Map;

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
	public Map<String, Object> eval(@PathVariable String expression) {
		String ans = null;
		Map<String, Object> result = new LinkedHashMap<String, Object>();
		try {
			ans = calculator.eval(expression);
			result.put("status", "success");
			result.put("result", ans);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			result.put("status", "fail");
			result.put("result", "Malformed Expression");	
		}
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
