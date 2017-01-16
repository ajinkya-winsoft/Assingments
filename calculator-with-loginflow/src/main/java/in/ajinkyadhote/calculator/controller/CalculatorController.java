package in.ajinkyadhote.calculator.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.ajinkyadhote.calculator.model.Calculator;
import in.ajinkyadhote.calculator.model.CalculatorException;

@RestController
@RequestMapping("/calculator")
public class CalculatorController  {
	
	@Autowired
	private Calculator calculator;
	private static final Logger logger = LoggerFactory.getLogger(CalculatorController.class);
	
	public CalculatorController() {
		
	}
	
	@RequestMapping( method = RequestMethod.GET,value={"/eval"})
	public @ResponseBody Map<String, Object> eval(@RequestParam("expression") String expression) {
		logger.debug("In eval function");
		String ans = null;
		Map<String, Object> result = new LinkedHashMap<String, Object>();
		try {
			ans = calculator.eval(expression);
			result.put("status", "success");
			result.put("result", ans);
		} catch (Exception e) {
			result.put("status", "fail");
			result.put("result", "Malformed Expression");	
		}
		return result;
	}
	
	@RequestMapping("/square/{expression}")
	public Map<String, Object> square(@PathVariable String expression) {
		logger.debug("In square function");
		String ans = null;
		Map<String, Object> result = new LinkedHashMap<String, Object>();
		try {
			ans = calculator.square(expression);
			result.put("status", "success");
			result.put("result", ans);
		} catch (Exception e) {
			result.put("status", "fail");
			result.put("result", "Malformed Expression : Cannot perform Square");	
		}
		return result;
	}
	
	@RequestMapping("/half/{expression}")
	public Map<String, Object> half(@PathVariable String expression) {
		logger.debug("In half function");
		String ans = null;
		Map<String, Object> result = new LinkedHashMap<String, Object>();
		try {
			ans = calculator.half(expression);
			result.put("status", "success");
			result.put("result", ans);
		} catch (Exception e) {
			result.put("status", "fail");
			result.put("result", "Malformed Expression");	
		}
		return result;
	}
}
