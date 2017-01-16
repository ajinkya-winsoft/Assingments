package in.ajinkyadhote.calculator.model;

import java.math.BigDecimal;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.udojava.evalex.Expression;

import in.ajinkyadhote.calculator.controller.CalculatorController;

@Component
public class Calculator {
	private static final Logger logger = LoggerFactory.getLogger(Calculator.class);
	
	public String eval(String expression) throws Exception  {
		 logger.debug("evaluation arithematic expression");
		 BigDecimal result = null;
		 Expression eval = new Expression(expression);
		 
		 result = eval.eval();
		 return result.toString();
	}
	
	public String square(String expression) {
		logger.debug("performing square operation");
		BigDecimal result = null;
		Expression eval = new Expression(expression+"*"+expression);
		 
		result = eval.eval();
		return result.toString();
	}

	public String half(String expression) {
		logger.debug("dividing no by 2");
		BigDecimal result = null;
		Expression eval = new Expression(expression+"*"+0.5);
		 
		result = eval.eval();
		return result.toString();
	}
}
