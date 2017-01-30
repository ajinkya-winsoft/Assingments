package in.ajinkyadhote.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import in.ajinkyadhote.lms.model.Issuedbook;
import in.ajinkyadhote.lms.repository.IssuedbookRepository;

@Component
public class IssuedbookService {
	
	@Autowired
	IssuedbookRepository issuedbookrepository;
	
	 public Object findAll(){
	        return issuedbookrepository.findAll();
	    }

	    public Issuedbook findById(Long id){
	        return issuedbookrepository.findOne(id);
	    }
	    
	    public List<Issuedbook> findByStudentID(Long student){
	        return issuedbookrepository.findByStudent(student);
	    }

	    public Issuedbook save(Issuedbook issuedbook){
	        return issuedbookrepository.save(issuedbook);
	    }

	    public void delete(Issuedbook issuedbook){
	    	issuedbookrepository.delete(issuedbook);
	    	return;
	    }
}
