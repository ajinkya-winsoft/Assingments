package in.ajinkyadhote.lms.service;

import java.util.Hashtable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import in.ajinkyadhote.lms.model.Person;
import in.ajinkyadhote.lms.repository.LibraryRepository;

@Component
public class StudentService {
	

    @Autowired
    private LibraryRepository LibraryRepository;

    public Object findAll(){
        return LibraryRepository.findAll();
    }

    public Person findById(Long id){
        return LibraryRepository.findOne(id);
    }

    public Person save(Person person){
        return LibraryRepository.save(person);
    }

    public void delete(Person person){
    	LibraryRepository.delete(person);
    	return;
    }

	public Person findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}
	
//	Hashtable<String, Person> persons = new Hashtable<String, Person>();
//	
////	public StudentService() {
////		Person st = new Person();
////		st.setFirstName("Ajinkya");
////		st.setLastName("Dhote");
//		st.setAddress("Nagpur");
//		st.setAge(24);
//		st.setPhoneNo("8800741607");
//		st.setPersonId("14mcei01");
//		st.setType("student");
//		persons.put("14mcei01", st);
//	}
//	
//	public Person getStudent(String rollNo) {
//		if(persons.containsKey(rollNo)) {
//			return persons.get(rollNo);
//		} else{
//			return null;
//		}
//		
//	}
//	
//	public Hashtable<String, Person> getAllStudent() {
//		return persons;
//	}

}
