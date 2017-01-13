package in.ajinkyadhote.calculator;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import in.ajinkyadhote.calculator.model.Calculator;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CalculatorApplicationTests {

	@Test
	public void contextLoads() {
	}
	
	@Test
	public void multiplicationByZeroShouldReturnZero() {
		Calculator calc = new Calculator();
		
		assertEquals("2 * must be 0", 0, calc.multiply(10, 0));
	}

}
