package in.ajinkyadhote.lms.controller;

import java.util.Hashtable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.ajinkyadhote.lms.model.Person;
import in.ajinkyadhote.lms.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	StudentService personService;
	
	@RequestMapping("/all")
	public Object getAllStudents(){
		return personService.findAll();
	}
	
	@RequestMapping("{id}")
	public Person getStudent(@PathVariable("id") Long id) {
		return personService.findById(id);
	}
	
	 @RequestMapping(value = "/create", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	  @ResponseBody
	  //public String create(@RequestParam(value = "id", required = true) Long id, @RequestParam("name")String name,@RequestParam("email") String email,@RequestParam("password") String password,@RequestParam("PhoneNo") String PhoneNo) {
	  public String create(@RequestBody Person person) {
		  String userId = "";
	    try {	    
	      //Person user = new Person();
	    	personService.save(person);
	     // userId = String.valueOf(user.getId());
	      userId = String.valueOf(person.getId());
	    }
	    catch (Exception ex) {
	      return "Error creating the user: " + ex.toString();
	    }
	    return "User succesfully created with id = " + userId;
	  }
}
