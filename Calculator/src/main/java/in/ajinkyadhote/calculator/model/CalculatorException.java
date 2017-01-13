package in.ajinkyadhote.calculator.model;

public class CalculatorException extends Exception{
	String errorMessage = null;
	
	public CalculatorException() {
		super();
	}
	
	public CalculatorException(String errorMessage) {
		super(errorMessage);
		this.errorMessage = errorMessage;
	}
	
	public CalculatorException(Throwable reason) {
		super(reason);
	}
	
	@Override
	public String toString() {
		return errorMessage;
	}
	
	public String getErrorMessage() {
		return errorMessage;
	}
}
