package in.ajinkyadhote.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import in.ajinkyadhote.lms.model.Book;
import in.ajinkyadhote.lms.repository.BookRepository;

@Component
public class BookService {

	@Autowired
    private BookRepository bookRepository;

    public Object findAll(){
        return bookRepository.findAll();
    }

    public Book findById(Long id){
        return bookRepository.findOne(id);
    }

    public Book save(Book Book){
        return bookRepository.save(Book);
    }

    public void delete(Book Book){
    	bookRepository.delete(Book);
    	return;
    }
}
