package in.ajinkyadhote.lms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.ajinkyadhote.lms.model.Book;

@Repository
public interface BookRepository  extends CrudRepository<Book,Long> {

}
