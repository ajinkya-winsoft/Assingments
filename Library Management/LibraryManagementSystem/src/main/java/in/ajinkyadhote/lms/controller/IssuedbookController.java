package in.ajinkyadhote.lms.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import in.ajinkyadhote.lms.model.Issuedbook;
import in.ajinkyadhote.lms.service.IssuedbookService;

@RestController
@RequestMapping("/issuedbooks")
public class IssuedbookController {
	
	@Autowired
	IssuedbookService  issuedbookService;

	@RequestMapping("/all")
	public Object getAllStudents(){
		return issuedbookService.findAll();
	}
	
	@RequestMapping("{id}")
	public Issuedbook getIssudedBookByID(@PathVariable("id") Long id) {
		return issuedbookService.findById(id);
	}
	@RequestMapping("/student/{id}")
	public List<Issuedbook> getIssudedBookByStident(@PathVariable("id") Long id) {
		return issuedbookService.findByStudentID(id);
	}
	
	 @RequestMapping(value = "/create", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)	  
	  @ResponseBody
	  //public String create(@RequestParam(value = "id", required = true) Long id, @RequestParam("name")String name,@RequestParam("email") String email,@RequestParam("password") String password,@RequestParam("PhoneNo") String PhoneNo) {
	  public String create(@RequestBody Issuedbook issuedbook) {
		  String userId = "";
	    try {	    
	      //Book user = new Book();
	    	issuedbookService.save(issuedbook);
	     // userId = String.valueOf(user.getId());
	      userId = String.valueOf(issuedbook.getId());
	    }
	    catch (Exception ex) {
	      return "Error creating the request: " + ex.toString();
	    }
	    return "Request succesfully created with id = " + userId;
	  }
	 
	 @RequestMapping("/update/{id}")
	  @ResponseBody
	  //public String updateUser(@PathVariable("id") Long id, @PathVariable("name")String name,@PathVariable("email") String email,@PathVariable("password") String password,@PathVariable("PhoneNo") String PhoneNo) {
	  public Map<String, Object> updateUser(@PathVariable Long id) {
		 Map<String, Object> result = new HashMap<String, Object>();
		 try {
	    	//Person user = personService.findById(id);
			Issuedbook issuedbook = issuedbookService.findById(id);
			issuedbookService.save(issuedbook);
	    }
	    catch (Exception ex) {
	    	System.out.println(ex);
	    	ex.printStackTrace();
	      result.put("result","Error requesting book: " + ex.toString());
	      return result;
	    }
	   result.put("result","Book succesfully requested!");
	   return result;
	  }

}
