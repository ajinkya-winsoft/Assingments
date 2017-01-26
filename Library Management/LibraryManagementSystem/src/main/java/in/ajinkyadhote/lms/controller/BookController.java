package in.ajinkyadhote.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.ajinkyadhote.lms.model.Book;
import in.ajinkyadhote.lms.service.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	BookService bookService;

	@RequestMapping("/all")
	public Object getAllStudents(){
		return bookService.findAll();
	}
	
	@RequestMapping("{id}")
	public Book getStudent(@PathVariable("id") Long id) {
		return bookService.findById(id);
	}
	
	 @RequestMapping(value = "/create", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	  @ResponseBody
	  //public String create(@RequestParam(value = "id", required = true) Long id, @RequestParam("name")String name,@RequestParam("email") String email,@RequestParam("password") String password,@RequestParam("PhoneNo") String PhoneNo) {
	  public String create(@RequestBody Book Book) {
		  String userId = "";
	    try {	    
	      //Book user = new Book();
	    	bookService.save(Book);
	     // userId = String.valueOf(user.getId());
	      userId = String.valueOf(Book.getId());
	    }
	    catch (Exception ex) {
	      return "Error creating the user: " + ex.toString();
	    }
	    return "User succesfully created with id = " + userId;
	  }
}
