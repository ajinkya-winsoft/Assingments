package in.ajinkyadhote.lms.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.ajinkyadhote.lms.model.Person;



@Repository
public interface LibraryRepository  extends CrudRepository<Person,Long> {

}




//import com.Sample.Entity.Person;
//
//@Repository
//public interface PersonRepository extends CrudRepository<Person,Long> {
//	public Person findByEmail(String email);
//	/***public Person findUsingEmail(String email);******/
//	
//}
