package in.ajinkyadhote.lms.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import in.ajinkyadhote.lms.model.Issuedbook;



public interface IssuedbookRepository extends CrudRepository<Issuedbook,Long>  {
	List <Issuedbook> findByStudent(Long id);

}
